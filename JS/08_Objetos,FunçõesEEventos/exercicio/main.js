

// const delta = b * b - 4 * a * C;
// const x1 = ((-b + Math.sqrt(delta)) / 2 * a)
// const x2 = ((-b - Math.sqrt(delta)) / 2 * a)


 function equação2grau (n1 = 1, n2 = 1, n3 = 1) {
    const delta = (n2 * n2) - 4*n1*n3
    return delta
 }

 function x1 (n1, n2) {

    var x1 = ((-n2) + Math.sqrt(delta)) / (2 * n1)
    return x1

}

function x2 (n1, n2) {

    var x2 = ((-n2) - Math.sqrt(delta)) / (2 * n1)
    return x2
}

const n1 = 3
const n2 = 3
const n3 = -5

const delta = (n2 * n2) - 4 * n1 * n3;
const resultado1 = Math.sqrt(x1(n1, n2));
const resultado2 = Math.sqrt(x2(n1, n2));


const eventClique = () => {
    console.log(x1)