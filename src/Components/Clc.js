import { useState } from "react"
function Clc(props){
    var [typedNumbers, setTypedNumbers] = useState(""); 

    const handleclick = (digit) => {
        setTypedNumbers((prev) => prev + digit);
    };
    const handlAdd = () => {
       var arr=typedNumbers.split("+").map(Number)
       let sum=0
       for(let i=0;i<arr.length;i++){
         sum=sum+arr[i]
       }
  setTypedNumbers(sum)

  }
   return(<> <div style={{
    display:"flex",
    justifySelf:"center",

   }}>
        <h4 style={{marginRight:"700px",}}>{props.name}</h4>
    </div>
    <div style={{
        width:"100vh",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
    }}>
        <div style={{
            height: "508px",
            width: "370px",
            border:"2px solid black",
            backgroundColor:' #cacaca',
            display:"flex",
            justifyContent:"center",
            flexDirection:"column",
            borderRadius:"3px",
            // backgroundColor:"black",
            
        }}>
            
            <div style={{height:"150px",
                width:"350px",
                border:"2px solid black",
                marginTop:"3px",
                borderRadius:"10px",
                marginLeft:"8px",
                backgroundColor:"#7a6666",
            }}>
<h3 id="one"> {typedNumbers}</h3>
            </div>
            <div style={{height:"400px",
                width:"350px",
                border:"2px solid black",
                marginTop:"3px",
                borderRadius:"10px",
                marginLeft:"8px",
                marginBottom:"3px",
            }}>
                 <div style={{height:"50px",
                width:"340px",
                // border:"2px solid black",
                marginTop:"3px",
                // borderRadius:"10px",
                // margin:"10px",
                // marginBottom:"3px",
                marginTop:"30px",
                marginLeft:"3px",
                display:"flex",
                justifyContent:"space-around"

            }}>
         <button style={{
            padding:"10px 40px",
            fontSize:"30px",
            
         }} onClick={()=>{handleclick(1)}}>1</button>
         <button style={{
            padding:"10px 40px",
            fontSize:"30px",
         }} onClick={()=>{handleclick(2)}}>2</button>
         <button style={{
            padding:"10px 40px",
            fontSize:"30px",
         }}  onClick={()=>{handleclick(3
            
         )}}>3</button>
         

            </div>
                 <div style={{height:"50px",
                width:"340px",
                // border:"2px solid black",
                marginTop:"3px",
                borderRadius:"10px",
               
                marginTop:"30px",
                marginLeft:"3px",
                marginTop:"30px",
                marginLeft:"3px",
                display:"flex",
                justifyContent:"space-around"

            }}>
                  <button style={{
            padding:"10px 40px",
            fontSize:"30px",
         }} onClick={()=>{handleclick(4)}}>4</button>
         <button style={{
            padding:"10px 40px",
            fontSize:"30px",
         }} onClick={()=>{handleclick(5)}}>5</button>
         <button style={{
            padding:"10px 40px",
            fontSize:"30px",
         }} onClick={()=>{handleclick(6)}}>6</button>

            </div>
                 <div style={{height:"50px",
                width:"340px",
                // border:"2px solid black",
                marginTop:"3px",
                borderRadius:"10px",
                // margin:"10px",
                // marginBottom:"3px",
                marginTop:"30px",
                marginLeft:"3px",
                display:"flex",
                justifyContent:"space-around"

            }}>
         
         <button style={{
            padding:"10px 40px",
            fontSize:"30px",
         }} onClick={()=>{handleclick(7)}}>7</button>
         <button style={{
            padding:"10px 40px",
            fontSize:"30px",
         }} onClick={()=>{handleclick(8)}}>8</button>
         <button style={{
            padding:"10px 40px",
            fontSize:"30px",
         }} onClick={()=>{handleclick(9)}}>9</button>
            </div>
                 <div style={{height:"50px",
                width:"340px",
                // border:"2px solid black",
                marginTop:"3px",
                borderRadius:"10px",
                // margin:"10px",
                // marginBottom:"3px",
                marginTop:"30px",
                marginLeft:"3px",
                 display:"flex",
                justifyContent:"space-around"

            }}>
         
         <button style={{
             padding:"4px 20px",
            fontSize:"30px",
         }} onClick={()=>{handleclick("+")}}>+</button>
         <button style={{
             padding:"4px 20px",
            fontSize:"30px",
         }}onClick={()=>{handleclick("-")}}>-</button>
         <button style={{
 padding:"4px 20px",
             fontSize:"30px",
         }}onClick={()=>{handleclick("*")}}>*</button>
         <button style={{
            padding:"4px 20px",
            fontSize:"30px",
         }}onClick={()=>{handleclick("/")}}>/</button>
         <button style={{
            padding:"4px 20px",
            fontSize:"30px",
         }}onClick={()=>{handlAdd()}}>=</button>
            </div>
           

            </div>

        </div>
    </div>
    </>
   )
}
export default Clc