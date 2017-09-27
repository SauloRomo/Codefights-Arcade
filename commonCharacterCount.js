function commonCharacterCount(s1, s2) {
      var value1 = s1.split("").sort();
       var value2 = s2.split("").sort();
       let count = 0;
       var numIn = 0;
       var numOut = 0;
       console.log(value1);
       console.log(value2);
       if(s1.length > s2.length ) {
              numIn = value2;
              numOut = value1;
       }else {numIn = value1; numOut =value2;}
      
       for(var i  = 0; i < numIn.length ; i++) {        
                if(numIn[i] === numOut[i] ) {    
                              count++;
                } 
       if(numIn[i] === numIn[i+1] && numOut[i] != numOut[i+1]) {
              numIn.shift();
       }
              }
       return count;
}
