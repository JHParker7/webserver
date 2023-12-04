pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
               sh "docker build app"
               sh "docker run app"
               echo "app running"
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