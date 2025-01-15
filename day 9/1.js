import fs from "fs";

const filepath = "./1.txt";

fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file !",err);
        return;
    }
    console.log("file content: ", data);
    
    
});