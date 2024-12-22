
function Login(){
    return(
      <>
      
        <form  style={{
        display:"flex",
        flexDirection:"column",
        // width:"300px",
       
        alignItems:"center",
        padding:"20px"
        
    
        }} >
            <br/>
            <input type="text" placeholder="UserName" style={{
                margin:"6px",
                padding:"8px 30px",
            }} /> <br/>
            <input type="email" placeholder="Email" placeholder="enter your email" style={{
                margin:"6px",
                padding:"8px 30px",
            }} /> <br/>
            <input type="password" placeholder="password"placeholder="enter your passeord" style={{
                margin:"6px",
                padding:"8px 30px"

            }} /> <br/>
            <button placeholder="UserName" style={{
                margin:"6px",
                padding:"8px 30px"
            }}>Login</button>
        </form>
        </>
    )
}
export default Login;