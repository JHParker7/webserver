pipeline {
    agent {
        docker {
            image 'ubuntu:latest' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') {
            steps {
                sh "apt-get update"
               sh "apt-get install nodejs"
               sh "apt-get install npm"
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