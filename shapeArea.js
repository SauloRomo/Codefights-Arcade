function shapeArea(n) {
    let area =0 ;
    for(var i = 1; i <= n ; i++) {
            area += (i*4)-4;
    }
    console.log(area+1);
    return area+1;
}
