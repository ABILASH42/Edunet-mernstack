import fs from 'fs';

const filepath = './grades.txt';

function readFile() {
    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file !', err);
            return;
        }
    
    });
}