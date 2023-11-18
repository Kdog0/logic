var num=[]
aux = 0



function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


for(i=0;i<10;i++){
    num.push(getRandom(0,100))
    
        for(j=0;j<num.length;j++){
            if(num[i]<num[j]){
                aux=num[i]


                num[i]=num[j]
                num[j]=aux
                

            }    
            console.log(num)
        }
            
    
    
}
console.log(num);

                
                
               


   
