


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function arr(tamanho) {
    let vet = []
    for (i = 0; i < tamanho; i++) {
        vet.push(getRandom(0, 16))
    }
    return vet
}



function retorneMatriz() {
    let mtz = []

    for (i = 0; i < 6; i++) {
        for (n = 0; n < 6; n++) {
             mtz.push(arr(6))
        }
    }
    console.log(mtz)

    for(j=0 ; j<6; j++ ){
        for(l=0; l<6;l++){
            mtz[j][l] = mtz[j][l]*100
        }
    }
    
    console.log(mtz)

    
}
retorneMatriz()

// function retornarArray(tamanho){
//     let arr = [];
//     for(let i = 0; i < tamanho; i++)
//     {
//         arr.push(Math.round(Math.random() * 100));
//     }

//     return arr;
// }

// let resultado = retornarArray(5);
// console.log(resultado);