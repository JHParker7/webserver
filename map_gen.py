import numpy as np
import pandas as pd
from pprint import pprint
import pickle

pd.DataFrame

row_len = 20
col_len = 20

no_way_out=True
maze_map=None
checked=[]

def find_exit(current_x, current_y, to_check):
    global maze_map
    global no_way_out
    global checked
    pos=False
    maze_map2=maze_map.copy()
    maze_map2[current_x,current_y]="77"
    #print(maze_map2)
    #print("current: ",str([current_x,current_y]))
    #print("checked: ",checked)
    #print("to_check: ",to_check)
    #my_dict = {i:checked.count(i) for i in checked}
    #pprint(my_dict)
    #print(">>>>>>")
    if (maze_map[current_x + 1,current_y] == 2 or maze_map[current_x - 1,current_y] == 2 or maze_map[current_x,current_y - 1] == 2 or maze_map[current_x,current_y + 1] == 2):
        no_way_out=False
    if maze_map[current_x + 1,current_y] == 0 and not str([current_x + 1,current_y]) in checked:
        pos = [current_x + 1,current_y]
        if no_way_out == True:
            to_check.append(pos)
            checked.append(str(pos))
    if maze_map[current_x - 1,current_y] == 0 and not str([current_x - 1,current_y]) in checked:
        pos = [current_x - 1,current_y]
        if no_way_out == True:
            to_check.append(pos)
            checked.append(str(pos))
    if maze_map[current_x,current_y - 1] == 0 and not str([current_x,current_y-1]) in checked:
        pos = [current_x,current_y - 1]
        if no_way_out == True:
            to_check.append(pos)
            checked.append(str(pos))
    if maze_map[current_x,current_y + 1] == 0 and not str([current_x,current_y+1]) in checked:
        pos = [current_x,current_y + 1]
        if no_way_out == True:
            to_check.append(pos)
            checked.append(str(pos))
    return to_check

def is_there_a_way_out(to_check):
    global checked
    global no_way_out
    while True:
        if len(to_check):
            pos=to_check[0]
            current_x = pos[0]
            current_y = pos[1]
            to_check=find_exit(current_x,current_y,to_check)
            if no_way_out == False:
                print("way_out")
                return to_check
            checked.append(str(to_check.pop(0)))
            if len(to_check) == 0:
                print("break")
                return to_check
        
def remove_random_wall():
    global maze_map
    ran_row = np.random.randint(1,row_len+1)
    ran_col = np.random.randint(1,col_len+1)
    print(maze_map)
    while maze_map[ran_row,ran_col] != 1:
        ran_row = np.random.randint(1,row_len+1)
        ran_col = np.random.randint(1,col_len+1)
        """
        print("ran_row: ",ran_row)
        print("ran_col: ",ran_col)
        print("value: ",maze_map[ran_row,ran_col])"""
    maze_map[ran_row,ran_col] = 0

def gen_row(x,y):
    if x==0 or x==row_len+1: return 1
    elif (x==1 or x==2) and (y==1 or y==2):
        return 0
    else: return np.random.choice([0,1])

def core():
    global maze_map
    global checked
    global no_way_out
    maze_map=np.matrix([[1 for x in range(row_len+2)] if y==0 or y==col_len+1 else [gen_row(x,y) for x in range(row_len+2)] for y in range(col_len+2)])
    maze_map[row_len,col_len]=2
    
    while no_way_out == True:
        to_check = [[1,1]]
        checked = []
        to_check=is_there_a_way_out(to_check)
        print(checked)
        remove_random_wall()
        if no_way_out == False:
            break
    
    return maze_map

pickle.dump([core() for i in range(10000)],open("training_data.pkl","wb+"))