const fs = require('fs');
function readFile(path){
    return fs.readFileSync(path);
};
module.exports ={
   readFile,
};