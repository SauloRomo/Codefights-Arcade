function centuryFromYear(year) {
 var x = year%100;
  var y = 0;
  if(x != 0) {
     y= (year/100) + 1;
      y = parseInt(y);
  }else {
      y= year/100;
      y= parseInt(y);
  }
    return y;
}
