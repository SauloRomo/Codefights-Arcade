function extractEachKth(inputArray, k) {
var result = inputArray.filter((v, i) => ((i + 1) % k) !== 0);
    return result;
}
