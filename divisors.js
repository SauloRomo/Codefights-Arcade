function divisors(integer) {
var y = [] ;
for (var i = 2 ; i <= Math.floor(Math.sqrt(integer)); i ++) 
if (integer % i === 0)
  {
    y.push(i);
    if (integer / i !== i) 
    y.push(integer / i);

  }
    y.sort(function(x, y) {

     return x - y;
     
 }); 
    if(y.length === 0 ){
    	return integer + " is prime";

    }else {
    	console.log(y.length);
     return y;
     
    }
    }
     

divisors(13);
