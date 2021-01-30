def gv

pipeline {

    agent any
    parameters {
        // string(name: 'VERSION', defaultValue: '', description: 'version to deploy on prod')
        choice(name: 'VERSION', choices: ['1.1.0', '1.2.0', '1.3.0'], description: '')
        booleanParam(name: 'executeTests', defaultValue: true, description: '')
    }
    environment {
        NEW_VERSION = '1.3.0'
    }
    // tools {
    //     maven 'Maven'
    // }
    stages {
        // importing the groovy script!
        stage("init"){
            steps {
                script {
                    gv = load "script.groovy"
                }
            }
        }
        stage("build") {
    
            steps {
                // echo 'building the application...'
                // echo "building version ${env.NEW_VERSION}"
                //sh "mvn install"
                script {
                    gv.buildApp()
                }
            }
        }

        stage("test") {
            when {
                // if params.executeTests is true, this stage will execute
                expression {
                    params.executeTests == true
                }
            }
            // when {
            //     expression {
            //         // this is a default env variable from jenkins
            //         env.BRANCH_NAME == 'dev' || env.BRANCH_NAME == 'master'
            //     }
            // }
            steps {
                // echo 'testing the application...'
                script {
                    gv.testApp()
                }
            }
        }

        stage("deploy") {

            steps {
                // echo 'deploying the application...'
                
                // withCredentials([
                //     usernamePassword(credentials: 'global' usernameVariable: USER, passwordVariable: PWD)
                // ]) {
                //     sh "some script ${USER} ${PWD}"
                // }
                // echo "deploying version ${params.VERSION}"
                script {
                    gv.deployApp()
                }
            }
        }
    }

    // post {
    //     // execute some logic AFTER all stages
    //     always {
    //         // it will execute ALWAYS, even if the build fails (ex: sending an email)
    //     }
    
    //     success {
    //         // it will execute on SUCCESS
    //     }

    //     failure {
    //         // it will execute on FAILURE
    //     }
    // }
}