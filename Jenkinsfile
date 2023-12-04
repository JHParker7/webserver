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
                sh "sudo apk update"
               sh "sudo apk install nodejs"
               sh "sudo apk install npm"
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