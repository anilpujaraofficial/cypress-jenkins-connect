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
                        sh "npx cypress run --record --key bbd0d231-5efb-4928-9ea0-ac11b0e864f9  --group 2x-chrome --browser chrome --parallel"
                        // sh "npm run cy:sorry:cypress"

                    }

                }
                stage("CI Machine #2") {
                    steps {
                        sh "npx cypress run --record --key bbd0d231-5efb-4928-9ea0-ac11b0e864f9 --group 2x-chrome --browser chrome --parallel"
                        // sh "npm run cy:sorry:cypress"

                    }

                }
                stage("CI Machine #3") {
                    steps {
                        sh "npx cypress run --record --key bbd0d231-5efb-4928-9ea0-ac11b0e864f9 --group 2x-chrome --browser chrome --parallel"
                        // sh "npm run cy:sorry:cypress"

                    }

                }
                stage("CI Machine #4") {
                    steps {
                        sh "npx cypress run --record --key bbd0d231-5efb-4928-9ea0-ac11b0e864f9 --group 2x-chrome --browser chrome --parallel"
                        // sh "npm run cy:sorry:cypress"
                    }
                }


            }
        }



    }

    post {
        always {
            sh 'npm run posttest'
        }
    }
}