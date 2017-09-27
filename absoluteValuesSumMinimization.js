function absoluteValuesSumMinimization(a) {
var minimum = Infinity;
  var element;
  for (var i = 0; i < a.length; i++) {
    var sum = 0;
    for (var j = 0; j < a.length; j++) {
      sum += Math.abs(a[i] - a[j]);
    }
    if (sum < minimum) {
      minimum = sum;
      element = a[i];
    }
  }
  return element;
}
