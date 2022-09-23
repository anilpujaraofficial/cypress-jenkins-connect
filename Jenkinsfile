pipeline {
    agent any

    stages {
        stage("start automation") {
            steps {
                echo "sa"
            }
        }



        stage("Parallel Testing") {
            parallel {
                stage("Tester 1") {
                    steps {
                        echo "sa"
                    }
                }
                stage("Tester 2") {
                    steps {
                        echo "sa"
                    }
                }

            }
        }

        stage("end automation") {
            steps {
                echo "ea"
            }
        }
    }
}