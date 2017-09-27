function isIPv4Address(inputString) {
    return inputString.split(".").length == 4 && inputString.split(".").filter(v => v != parseInt(v) || v > 255).length == 0;
}
