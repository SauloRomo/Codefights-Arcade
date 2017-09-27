function messageFromBinaryCode(code) {
    var counter = 0;
    var binaryArr = [];
    var octBinary = "";
    var intBinary = 0;
    var final = "";
    for(var i = 0; i <= code.length; i++) {
        if(counter === 8) {
            binaryArr.push(octBinary);
            counter = 0;
            octBinary = 0;
        }
        octBinary += code[i];
        counter++;
    }
    for(var x = 0; x < binaryArr.length; x ++ ) {
       intBinary = parseInt(binaryArr[x], 2);
       
        final += String.fromCharCode(intBinary);
    }
     return final;
}
