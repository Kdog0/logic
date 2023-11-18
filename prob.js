const input =  require("prompt-sync")({sigint:true})


var num = []
var par = []
var imp = []

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function popule(){
    for(i=0;i<30;i++){
    
        num.push(getRandom(0,100))
    
    }
    console.log(num)
}
function pares(){
    for(var n=0;n<num.length;n++){ 
        {if(num[n]%2==0){
            par.push(num[n])
        }else{
            imp.push(num[n])
        }}
        
    }

}
function popular(){
    for(var p=0 ; p< 5; p++){

    }
}


    

popule()
pares()
console.log(par.slice(10));
console.log(imp.slice(10));