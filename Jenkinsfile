pipeline {
    agent any
    stages {
        stage("start automation") {
            steps {

                sh "node --version"
                sh 'npm i'
                sh 'npx cypress verify'
            }
        }
        // here the actual automation is ran.
        stage("Run Automated Tests") {
            parallel {
                stage("CI Machine #1") {
                    steps {
                        // sh "yarn cypress run --key=e4d5b964-9cb5-46d6-bbc4-60f7f295689c --record --parallel  --group parallel_run"
                        sh "npm run CYPRESS_API_URL='http://localhost:1234/' npx cy2 run --parallel --record --key somekey"

                    }

                }
                stage("CI Machine #2") {
                    steps {
                        // sh "yarn cypress run --key=e4d5b964-9cb5-46d6-bbc4-60f7f295689c --record --parallel  --group parallel_run"
                        sh "npm run CYPRESS_API_URL='http://localhost:1234/' npx cy2 run --parallel --record --key somekey"

                    }

                }
                stage("CI Machine #3") {
                    steps {
                        // sh "yarn cypress run --key=e4d5b964-9cb5-46d6-bbc4-60f7f295689c --record --parallel  --group parallel_run"
                        sh "npm run CYPRESS_API_URL='http://localhost:1234/' npx cy2 run --parallel --record --key somekey"

                    }

                }
                stage("CI Machine #4") {
                    steps {
                        // sh "yarn cypress run --key=e4d5b964-9cb5-46d6-bbc4-60f7f295689c --record  --parallel  --group parallel_run"
                        sh "npm run CYPRESS_API_URL='http://localhost:1234/' npx cy2 run --parallel --record --key somekey"
                    }
                }


            }
        }

    }


}