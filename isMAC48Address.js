function isMAC48Address(inputString) {
    if(inputString.length!=17){
     return false;
    }
 var regex = /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/;
   
    return regex.test(inputString);
}
