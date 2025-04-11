import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';



inquirer.prompt([
    {
        message: 'Type URL to generate QR code',
        name: 'URL',
    }
  
])
.then((answers) => {

    const url = answers.URL;
    const name = url.match(/\/\/(?:www\.)?([^\.]+)/)[1];
    const qr_code = qr.image(url);
    qr_code.pipe(fs.createWriteStream(`${name}.png`));
    
})
.catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    } else {
        // Something else went wrong
    }
})