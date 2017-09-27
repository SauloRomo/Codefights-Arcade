function digitDegree(n) {
    if(n<10){
        return 0;
    }
    var Number = n.toString();
    var splitnumber = Number.split("").toString();
    var x = splitnumber.toString();
    var b = x.split(',').map(function(i){
    return parseInt(i, 10);
    });
    var result = 0;
    for(var i = 0 ; i < b.length; i++) {
        result += b[i];
    }
    if(result>=10){
        return 2;
    }else {return result}
    
}
