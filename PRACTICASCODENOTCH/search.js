function divideByLines(text) {
    return text.toString().split('\n')
}


function filterArr(dara, query) {
    return DataCue.filter(function(list) {
        return list.toLowerCase().indexOf(query.toLowerCase()) > -1;
        
    })
    
};

module.exports={
    divideByLines,
    filterArr,
};