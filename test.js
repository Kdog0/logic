const { getRandom, retornarArray, retorneMatriz } = require("./biblioMtz")

getRandom(1, 20)
retornarArray()
mtz = retorneMatriz(10, 10)
let vet = []
var numero = 0
var valor = 0

function ordena() {
    for (i = 0; i < mtz.length; i++) {
        for (k = 0; k < mtz.length; k++) {
            vet.push(mtz[i][k])
        }
    }
    for (l = 0; l < vet.length; l++) {
        for (j = 0; j < vet.length; j++) {
            if (vet[j] >= vet[j + 1]) {
                let m = vet[j]
                vet[j] = vet[j + 1]
                vet[j + 1] = m
            }
        }
    }
    valor = vet.splice(-1)
    for (i = 0; i < mtz.length; i++) {
        for (k = 0; k < mtz.length; k++) {
            if (mtz[i][k] == valor) {
                numero = Math.min(...mtz[i])
                index = i 
                console.log(mtz[i].indexOf(numero))  
            }
        }
    }
    return
}
ordena()


console.table(mtz);
console.log(valor);
console.log(numero);
console.log(index);





