pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
               sh "cd jacks-site;npm cache clean -f;npm install;npm run build"
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