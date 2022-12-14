function calcular() {
    var a = 1;
    var b = -3;
    var c = -10;
    
    const delta = b * b - 4 * a * c;
    console.log(delta);
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(x1)
    console.log(x2)
    }