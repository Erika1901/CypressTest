import groovy.json.JsonOutput

def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]

def getBuildUser() {
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}

pipeline {

    agent any 

 tools{
        maven 'maven'
        allure 'allure'
        jdk 'java'
        }

        environment {
        BUILD_USER = ''
    }

    parameters{
        string(name:'SPEC', defaultValue: "cypress/e2e/**/**",description: "Enter the script path that you want to execute")
        choice (name: 'BROWSER', chhoices:['chrome','edge','firefox'], description: "Choose the browser where you want to execute your scripts")
    }

    options{
        ansiColor('xterm')
    }

    stages {
        stage('Building'){
            echo "Building the application"
        }
        stage('Testing'){
            steps{
                catchError(buildResult: 'FAILURE', stageResult: 'FAILURE'){
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC} --env allure = true"
                }
            }   
        }
        stage('Deploying'){
            steps {
                echo "Deploy the application"
            }
            
        }

        stage('Allure report generation'){
            steps{
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){
                    allure([
                        includeProperties : true,
                        jdk : 'java',
                        properties : [[key: 'release version', value: '4.0.2']],
                        reprtBuildPolicy: 'AlWAYS',
                        results: [[path: 'allure-reseults']]
                    ])
                }
            }
        }
        stage('Publish Report'){
            steps{
                publishHTML([allowMissing: false,
                                   alwaysLinkToLastBuild: false,
                                   keepAll: true,
                                   reportDir: 'cypress/report',
                                   reportFiles: 'index.html',
                                   reportName: 'HTML Report',
                                   reportTitles: '',
                                //    useWrapperFileDirectly: true
                                   ])
            }
        }
    }
    
}