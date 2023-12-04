pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
               sh "sudo apt update"
               sh "sudo apt install nodejs"
               sh "sudo apt install npm"
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