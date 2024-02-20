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
               sh "cd app; npm run build"
            }
        }
        stage('Test') {
            steps {
                sh "flask --app api run; pytest"
            }
        }
        stage('Deploy') {
            steps {
                sh "docker compose up"
            }
        }
    }
}