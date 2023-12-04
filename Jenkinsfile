pipeline {
    agent {
        docker {
            image 'node:20.10.0-alpine3.18' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') {
            steps {
                sh "apt update"
               sh "apt install nodejs"
               sh "apt install npm"
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