// let a=["a",'b','c','d']
// a.pop()
// console.log(a.join(""))
// let arr1=[1,2,3,4,5]
// let arr2=['+','*','+','*']
// for(let i=0;i<arr2.length;i++){
//     if (arr2[i]=='*'){
//         var result=arr1[i]
//         for(let j=i;j<arr2.length;j++){
//             result=result*arr1[j+1]
//         }
//      break   
//     }
// }
// console.log(result)
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// months.splice(2,2,"may")
// console.log(months)
// operands=[1,2,3,4,5,8,10,2]
// operator=["+","+","*","*",'*','*','/']
// var a=1
// for(let i=0;i<operator.length;i++){
//     if(operator[i]==='*'){
        
        
//         var res=operands[i]
//          res=res*operands[i+1]
        
//          operands.splice(i,2,res)
//          operator.splice(i,1)
//         i-=1
//     }
//     else if(operator[i]==='/'){
        
        
//         res=res/operands[i+1]
       
//         operands.splice(i,2,res)
//         operator.splice(i,1)
//        i-=1
//     }
//     console.log(res)
// }
// console.log(operands)
// console.log(operator)
let arr=["1","2"]
arr=arr.map(Number)
console.log(arr)