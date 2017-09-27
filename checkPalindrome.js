function checkPalindrome(inputString) {
 var x = inputString.split("");
 var y = inputString.split("").reverse();
 if(JSON.stringify(x) === JSON.stringify(y) ){
  return true; 
 }else{
  return false; 
 }
    
        
}
