function arrayChange(inputArray) {
var change = 0;
    for (var i = 0; i < inputArray.length - 1; i++){
        while (inputArray[i] >= inputArray[i + 1])
        {
            inputArray[i + 1]++;
            change++;
        }
    }
    return change;
}

