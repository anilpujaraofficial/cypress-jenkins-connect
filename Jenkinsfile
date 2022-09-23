pipeline {
    agent any

    stages {
        stage("start automation") {
            steps {
                sh 'node --version'
                sh 'npm i'
                sh 'npx cypress verify'
            }
        }

        stage("Parallel Testing") {
            parallel {
                stage("CI Machine #1") {
                    steps {
                        // sh 'yarn cypress run --parallel'
                       sh 'yarn cypress run --record --parallel --ci-build-id $BUILD_TAG'
                    }
                }
                stage("CI Machine #2") {
                    steps {
                        // sh 'yarn cypress run --parallel'
                       sh 'yarn cypress run --record --parallel --ci-build-id $BUILD_TAG'
                    }
                }

                stage("CI Machine #3") {
                    steps {
                        // sh 'yarn cypress run --parallel'
                       sh 'yarn cypress run --record --parallel --ci-build-id $BUILD_TAG'
                    }
                }

            }
        }

        stage("Report generate"){
            steps{
                echo "Report"
            }
        }


    }
}