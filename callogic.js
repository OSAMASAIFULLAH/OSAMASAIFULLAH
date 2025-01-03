function clac(number,operator){
  let  result=number[0]
    
 for(let i=0;i<operator.length;i++){
    if(operator[i]==='+'){
        
        result=result+number[i+1]
    }
    else if(operator[i]==='-'){
        result=result-number[i+1]
    }
}
console.log("the result is"+result)
}
number=[1,4,3,4]
operator=['+','-','+']
clac(number,operator)
