function isLucky(n) {
    var nString = n.toString();
    var lengNs = nString.length /2;
    var firstHalf = 0;
    var secondHalf = 0;
  
    for(var i = 0 ; i < lengNs; i++){
        firstHalf += parseInt( nString[i]);
    }
    for (var x = lengNs; x < nString.length; x++) {
        secondHalf += parseInt(nString[x]);
    }
    if(firstHalf === secondHalf) {
        return true;
    }else {
        return false;
    }
    
}
