function allLongestStrings(inputArray) {
 var  x  = inputArray.sort(function(a, b){return b.length - a.length});
 var result = [];
 for(var i = 0; i < x.length ; i++ ){
    if(x[i].length === x[0].length) {
     result.push(x[i]);
    }
 }
 return result;
}
