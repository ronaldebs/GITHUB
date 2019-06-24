var fs = require('fa');

function newFile(name, content) {
    fs.appendfile(name, content, function (err){
       if (err) throw err;
       console.log('GUARDADO!');   
    });
};

module.exports = {
    newFile,
};