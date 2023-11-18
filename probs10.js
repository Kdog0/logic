var num=[]
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


for(i=0;i<20;i++){
    num.push(getRandom(0,100))
}
console.log(num);

for(j=0;j<10;j++){
    aux = num[j]
    num[j] = num[19-j]
    num[19-j] = aux
}
console.log(num);

