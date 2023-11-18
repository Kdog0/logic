const array = ["c","o","n","i","o"]
const correto= ["c","i","n","c","o"]
const array2 = []


for(i=0; i<correto.length + 4; i++){
    array2.push(correto.shift())
}

array.splice(array)
array.push(array2.slice())

console.log(array);
console.log(array2);
