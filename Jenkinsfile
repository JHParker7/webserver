pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
               sh "sudo apt update
                sudo apt install nodejs
                sudo apt install npm"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}