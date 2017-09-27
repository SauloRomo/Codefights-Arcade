function makeArrayConsecutive2(statues) {
 let maxNum =    Math.max.apply(null, statues);
 let minNum =    Math.min.apply(null, statues);
 let presult = 0;
 let FinalR = 0;
 //console.log(minNum);
 for( var i = minNum; i <= maxNum ; i++) {
        presult++;
 }
  FinalR =  presult  - statues.length;
 
 console.log(FinalR);
 return FinalR;
}
