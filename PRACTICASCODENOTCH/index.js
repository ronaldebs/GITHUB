var word = "amet";
const { readFile } = require('./open.js');
const { divideBylines, filterArr} = require('./search');
const { newFile } = require('./createFile.js');

const inputfile = readFile('./input.txt');

const divideBylines = (inputfile);




const newArr = filterArr(divideArr, word);

console.log(newArr);

const separateArr = newArr.join("\r\n")

newFile('output.txt',self);