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
               sh "npm cache clean -f"
               sh "npm install"
               sh "npm run build"
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