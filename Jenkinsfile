pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
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