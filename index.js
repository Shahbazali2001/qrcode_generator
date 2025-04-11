import inquirer from 'inquirer';
inquirer.prompt([
    {
        message: 'Type URL to generate QR code',
        name: 'URL',
    }
  
])
.then((answers) => {
    console.log('answers:', answers);
})
.catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    } else {
        // Something else went wrong
    }
})