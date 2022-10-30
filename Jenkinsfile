pipeline {
    agent any
    stages {
        stage("start automation") {
            steps {
                sh "node --version"
                sh 'npm i'
                sh 'npx cypress verify'
                sh 'npm run pretest'
            }
        }
        // here the actual automation is ran.
        stage("Run Automated Tests") {
            parallel {
                stage("CI Machine #1") {
                    steps {
                        // sh "npm run cy:parallel:run"
                        sh "npm run cy:sorry:cypress"

                    }

                }
                stage("CI Machine #2") {
                    steps {
                        // sh "npm run cy:parallel:run"
                        sh "npm run cy:sorry:cypress"

                    }

                }
                stage("CI Machine #3") {
                    steps {
                        // sh "npm run cy:parallel:run"
                        sh "npm run cy:sorry:cypress"

                    }

                }
                stage("CI Machine #4") {
                    steps {
                        // sh "npm run cy:parallel:run"
                        sh "npm run cy:sorry:cypress"
                    }
                }


            }
        }



    }

    post {
        always {
            echo 'always  post!!!'
        }
    }
}