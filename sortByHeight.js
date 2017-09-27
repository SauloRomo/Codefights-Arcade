function sortByHeight(a) {
var sortArr = [];
var result = [];
var minusArr = [];
    for(var i =0 ; i < a.length; i++) {
            if(a[i] === -1) {
                minusArr.push(i);
            }else {
                result.push(a[i])
            }
    }
    sortArr = result.sort(function(a, b){return a-b});
    for(var x = 0 ; x < minusArr.length; x++){
        result.splice(minusArr[x], 0, -1 );

    }
    return result;
}
