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
               sh "npm cache clean -f"
               sh "npm install -g n"
               sh "n stable"
               sh "pm install --unsafe-perm=true --allow-root"
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