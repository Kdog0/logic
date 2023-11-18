var num=[]




function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function popular(){
    for(i=0;i<10;i++){
        num.push(getRandom(0,100))
        if(num[i]%2!=0){
            for(j=0;j<num.length;j++){
                aux=num[i]
                num[i]=num[j]
                num[j]=aux
    
            } 
        }console.log(num) 
    }
        
}

   
popular()