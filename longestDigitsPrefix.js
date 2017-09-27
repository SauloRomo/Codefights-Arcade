function longestDigitsPrefix(inputString) {
    var vector = [];
    var number = "";
    var final = 0;
    for(var i = 0; i <= inputString.length; i++ ){
            if(parseInt(inputString[i]) || inputString[i] === "0"){
                number += inputString[i];  
            }else {
                 vector.push(number);
                number= "";
                vector.push("");
            }
    }
     final = vector[0];
    console.log(vector);
    return final;
}
