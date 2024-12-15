/* Requires the Docker Pipeline plugin */
pipeline {
     environment {
        GITHUB_CREDENTIALS = credentials('github-pat2') // Reference GitHub PAT
    }

    agent { docker { image 'node:22.12.0-alpine3.21' } }
    stages {
         stage('Clone Repository') {
            steps {
                // Clone private GitHub repository
                git credentialsId: 'github-pat2', url: 'https://github.com/chelladurai89/jenkintest'
            }
        }
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
    }
}
