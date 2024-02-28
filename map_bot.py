import os

import neat
import visualize

import numpy as np
import pickle

from alive_progress import alive_bar

data=pickle.load(open("training_data.pkl","rb"))
data=np.array(data)

test_per=round(data.shape[0]*0.99)

train=data[test_per:]
test=data[:test_per]

train=data[:5]
debug=True

print(train.shape)
print(test.shape)

def eval_genomes(genomes, config):
    with alive_bar(len(genomes)*len(train)) as bar:
        for genome_id, genome in genomes:
            genome.fitness = 0
            net = neat.nn.FeedForwardNetwork.create(genome, config)
            genome.fitness=100
            for x in train:
                moves=0
                cur_pos=[0,0]
                moves_cap=100
                while moves<moves_cap:
                    moves=moves+1
                    temp_pos=cur_pos.copy()
                    output = net.activate(np.append(np.append(x.flatten(),cur_pos),[x[cur_pos[0]+1,cur_pos[1]],x[cur_pos[0]-1,cur_pos[1]],x[cur_pos[0],cur_pos[1]+1],x[cur_pos[0],cur_pos[1]-1]]))
                    if output[0]>1: output[0]=1
                    elif output[0]<-1: output[0]=-1
                    if output[1]>1: output[1]=1
                    elif output[1]<-1: output[1]=-1
                    temp_pos[1]=cur_pos[1]+round(output[1])
                    temp_pos[0]=cur_pos[0]+round(output[0])
                    if temp_pos[0]<0 and temp_pos[0]>(x.shape[0]-1): temp_pos[0]=temp_pos[0]-round(output[0])
                    if temp_pos[1]<0 and temp_pos[1]>(x.shape[1]-1): temp_pos[1]=temp_pos[1]-round(output[1])
                    if debug==True:
                        print(output)
                        print("down/up: ",round(output[1]))
                        print("right/left: ",round(output[0]))
                        print("wanted_pos",temp_pos)
                        print("wall: ", x[temp_pos[0],temp_pos[1]])
                    if x[temp_pos[0]][temp_pos[1]]==0:
                        if debug==True:
                            print("not_wall")
                        cur_pos=temp_pos
                        genome.fitness=genome.fitness+(cur_pos[0]*cur_pos[0])+(cur_pos[1]*cur_pos[1])
                    elif x[temp_pos[0]][temp_pos[1]]==2:
                        if debug==True:
                            print("goal!!")
                        break
                    else:
                        genome.fitness=genome.fitness-10
                        if debug==True:
                            print("wall!!!")
                    if debug==True:
                        print("fitness: ",genome.fitness)
                        x_1=x.copy()
                        x_1[cur_pos[0]][cur_pos[1]]=77
                        print(x_1)
                genome.fitness = genome.fitness + ((moves_cap-moves)*100)
                bar()



def run(config_file):
    # Load configuration.
    config = neat.Config(neat.DefaultGenome, neat.DefaultReproduction,
                         neat.DefaultSpeciesSet, neat.DefaultStagnation,
                         config_file)

    # Create the population, which is the top-level object for a NEAT run.
    p = neat.Population(config)

    # Add a stdout reporter to show progress in the terminal.
    p.add_reporter(neat.StdOutReporter(True))
    stats = neat.StatisticsReporter()
    p.add_reporter(stats)
    p.add_reporter(neat.Checkpointer(5))

    # Run for up to 300 generations.
    winner = p.run(eval_genomes, 300)

    # Display the winning genome.
    print('\nBest genome:\n{!s}'.format(winner))

    node_names = {1:"down/up",0:"right/left"}
    visualize.draw_net(config, winner, True, node_names=node_names)
    visualize.draw_net(config, winner, True, node_names=node_names, prune_unused=True)
    visualize.plot_stats(stats, ylog=False, view=True)
    visualize.plot_species(stats, view=True)

    p = neat.Checkpointer.restore_checkpoint('neat-checkpoint-4')
    p.run(eval_genomes, 10)


if __name__ == '__main__':
    # Determine path to configuration file. This path manipulation is
    # here so that the script will run successfully regardless of the
    # current working directory.
    local_dir = os.path.dirname(__file__)
    config_path = os.path.join(local_dir, "neat.config")
    run(config_path)
