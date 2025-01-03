let a="1+23+456+7"
// let arr=a.replace(/\s+/g,'').trim("").split("").map(Number)
// let arr=a.split("")
// let arr2=arr.map(Number)


// console.log(arr2)
// let sum=0
// for(let i=0;i<arr2.length;i++){
//     sum=sum+arr2[i]
    
// }
// console.log(sum)
let arr=a.split('+').map(Number)
console.log(arr)