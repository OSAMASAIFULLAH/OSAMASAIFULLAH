function sperator(a){
    oper=[]
    operant1=[]
    
    arrnum=a.split("").map((element)=>{
        if((element=='+')||(element=='-')){
            oper.push(element)
        }
        else{
            operant1.push(element)
        }
    })
  operant2=operant1.map(Number)
  result=operant2[0]
  for(let i=0;i<oper.length;i++)
    if(oper[i]==='+'){
        result=result+operant2[i+1]
    }
    else if(oper[i]==='-'){
        result=result-operant2[i+1]
    }
    console.log(result)
}
let arr="1+3+3-5"
sperator(arr)