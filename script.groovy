def buildApp() {
    echo 'GROOVY: building the application'
}

def testApp() {
    echo 'GROOVY: testing the application'
}

def deployApp() {
    echo 'GROOVY: deploy the application'
    echo "GROOVY: deploying version ${params.VERSION}"
}

return this