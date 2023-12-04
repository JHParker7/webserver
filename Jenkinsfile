pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sudo apt update
                sudo apt install nodejs
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