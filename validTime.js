function validTime(time) {
    var x = time.split(":");
     var y = x.map(Number);
    if(y[0] < 24 && y[1] <60 ){return true;}else{return false;}
}
