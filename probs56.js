function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let mtz = []

function arr(tamanho) {
    let vet = []
    for (i = 0; i < tamanho; i++) {
        vet.push(getRandom(0, 16))
    }
    return vet
}
let mtz2 = []

function retorneMatriz() {

    for (i = 0; i < 6; i++) {
        for (n = 0; n < 3; n++) {
            mtz.push(arr(7))
        }
    }console.table(mtz);
    
    mtz2 = mtz[1].pop()
    
    console.table(mtz2)
    
    
}
retorneMatriz()