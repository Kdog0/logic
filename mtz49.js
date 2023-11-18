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
    console.table(mtz);
    
    let coluna = []
    let colunal = []
    for(k=0;k<mtz.length;k++){
        for(j=0 ; j<6; j++ ){
            linha = mtz[k]
        }
        for(l=0; l<6;l++){
            coluna[l] = linha[l-k]
            colunal = coluna.filter(function(e){ return e === 0 || e })
            
        }
        
    } var total = colunal.reduce((total, currentElement) => total + currentElement)
    console.log(total);   
}
retorneMatriz()