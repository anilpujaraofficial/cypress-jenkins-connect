pipeline {
    agent any
    stages {
        stage("Basic Setup") {
            steps {
                echo "Basic setup Start"
                sh "yarn install"
                echo "Basic setup completed"
            }
        }
        // here the actual automation is ran.
        stage("Run Automated Tests") {
            parallel {
                stage("CI Machine #1") {
                    steps {
                        sh "yarn cypress run --key=e4d5b964-9cb5-46d6-bbc4-60f7f295689c --record --parallel --ci-build-id 1 --group parallel_run"
                    }
                }
                stage("CI Machine #2") {
                    steps {
                        sh "yarn cypress run --key=e4d5b964-9cb5-46d6-bbc4-60f7f295689c --record --parallel --ci-build-id 1 --group parallel_run"
                    }
                }
                stage("CI Machine #3") {
                    steps {
                        sh "yarn cypress run --key=e4d5b964-9cb5-46d6-bbc4-60f7f295689c --record --parallel --ci-build-id 1 --group parallel_run"
                    }
                }
                stage("CI Machine #4") {
                    steps {
                        sh "yarn cypress run --key=e4d5b964-9cb5-46d6-bbc4-60f7f295689c --record  --parallel --ci-build-id 1 --group parallel_run"
                    }
                }


            }
        }
        stage("Report Generation") {
            steps {
                echo "Report generation Process Running"
            }
        }
        // Remove unnecessary files
        stage("Remove unnecessary files") {
            steps {
                echo "Remove unnecessary files"
            }
        }
    }
}