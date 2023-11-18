var num=[]
var num2 = []
var res = []

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pop(){
    for(i=0;i<10;i++){
        num.push(getRandom(0,100))
    }

    for(i=0;i<10;i++){
        num2.push(getRandom(0,100))
    }

    for(i = 0; i <10; i++){

        res[i] = num[i]*num2[i]
        
    }
    console.log(num)
    console.log(num2)
    console.log(res)
   
}
pop()