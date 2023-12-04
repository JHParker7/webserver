pipeline {
    agent {
        docker {
            image 'node:21-alpine3.17' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') {
            steps {
               sh "cd app; npm install"
               sh "cd app; npm audit fix --force"
               sh "cd app; npm start"
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