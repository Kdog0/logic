
function getRandom(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}


function retornarArray(tamanho){
     vet=[]
    for(i=0;i<tamanho;i++){
        vet.push(getRandom(0,100))
    }

    return vet
}


function retorneMatriz(quadrantre,tamanho) {
    let mtz= []
    for(i=0;i<quadrantre;i++){
        for(n=0;n<quadrantre;n++){
            mtz.push(retornarArray(tamanho))
        }
    }return mtz
    
}


const abner = {
    getRandom,
    retornarArray,
    retorneMatriz
}

module.exports=abner