pipeline {
    agent {
        docker {
            image 'alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') {
            steps {
                sh "apk update"
               sh "apk install nodejs"
               sh "apk install npm"
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