/* Requires the Docker Pipeline plugin */
pipeline {
    environment {
        GITHUB_CREDENTIALS = credentials('github-pat3') // Reference GitHub PAT
    }

    agent {
        docker {
            image 'node:22.12.0-alpine3.21'
        }
    }

    stages {
        stage('Clone Repository') {
            steps {
                script {
                    echo 'Cloning the private GitHub repository...'
                }
                git credentialsId: 'github-pat3', url: 'https://github.com/chelladurai89/jenkintest.git'
            }
        }
        stage('Build') {
            steps {
                script {
                    echo 'Building the application...'
                }
                sh 'node --version'
            }
        }
    }

    post {
        always {
            script {
                echo 'Pipeline execution completed.'
            }
        }
        success {
            script {
                echo 'Pipeline succeeded!'
            }
        }
        failure {
            script {
                echo 'Pipeline failed.'
            }
        }
    }
}
