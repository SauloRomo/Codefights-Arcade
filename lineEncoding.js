function lineEncoding(s) {
    var count =1;
    var tmp= "";
    var final ="";
for(var i=0; i<=s.length; i++){
    if(s[i]===s[i+1]){
        count++;
    }
    else {
        if(count>1){
        tmp= count + s[i-1];}
        else {
          tmp=  s[i];
        }
        final+= tmp;
        tmp ="";
        count = 1;
    }
}
   return final;
}
