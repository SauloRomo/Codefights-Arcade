function adjacentElementsProduct(inputArray) {
 
    var arr = [];
    var x =0 ;
    
for(var i= 1; i< inputArray.length;  i++ ) {
    arr.push( inputArray[x] * inputArray[i]);
       x++;
      }

   console.log(arr);
  return Math.max.apply(null, arr);

}
