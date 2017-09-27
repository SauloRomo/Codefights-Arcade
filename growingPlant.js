
function growingPlant(upSpeed, downSpeed, desiredHeight) {
    if (upSpeed >= desiredHeight) return 1;
    return Math.floor(desiredHeight / (upSpeed - downSpeed));
}
