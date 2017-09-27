function companyBotStrategy(trainingData) {
    var counter = 0;
    var number = 0;
    for(var i= 0; i<trainingData.length ;i++) {
        if(trainingData[i][1] === 1) {
            number += trainingData[i][0];
            counter++;
        }
    }
    var result = number/counter;
    if(result) {
    return result;
    }else {return 0;}
}
// Copany boot CodeFights
