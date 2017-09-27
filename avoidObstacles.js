function avoidObstacles(inputArray) {
for (var i = 1;; i++) {
    var found = true;
    for (var y = 0; y < inputArray.length; y++) {
      if (inputArray[y] % i === 0) found = false;
    }

    if (found) return i;

  }
}
