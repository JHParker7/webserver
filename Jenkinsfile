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
               sh "sudo npm cache clean -f"
               sh "sudo npm install -g n"
               sh "sudo n stable"
               sh "sudo npm install --unsafe-perm=true --allow-root"
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