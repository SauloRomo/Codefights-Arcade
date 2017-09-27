function addBorder(picture) {
    var numRow =  picture[0].length +2;
    var x = topBotom(numRow);
       
        for(var i = 0; i<picture.length; i++){
                    picture[i]= "*"+ picture[i]+"*";
        
        }
    picture.push(x);
    picture.unshift(x);
    return picture;
}
function topBotom(numRow) {
    var x= "";
    for(var i = 0; i< numRow; i++) {
        x+=("*");
    }
    return x;
}
