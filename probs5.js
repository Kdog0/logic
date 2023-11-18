const input =  require("prompt-sync")({sigint:true})

var num=[]
var a = input("digite numero :") 
var res = []

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pop(){
    
    
    for(i=0;i<10;i++){
        num.push(getRandom(0,100))
    }

    for(i = 0; i <10; i++){

        res[i] = num[i]*a
        
    }
    console.log(num)
    
    console.log(res)
   
}
pop()