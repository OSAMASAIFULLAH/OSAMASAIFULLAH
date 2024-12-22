import React, { useState } from "react";
import Navebar from "./Component/Navebar";
import Textform from "./Component/Textform";
import Alert from "./Component/Alert";
import About from "./Component/About";
import Login from "./Component/Login"
import{
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom"
function App(){

  // const route=([
  //   {
  //     path:"/",
  //     element:<Navebar/>
  //   }
  // ])
  const[mode,setmode]=useState("default")
  const [alert,setAlert]=useState("oh")
  const showAlert=(message)=>{
   setAlert(message)
   setTimeout(() => {
    setAlert(null)
   },1500);
  }
  const togglemode=()=>{
    if(mode==="default"){
      setmode("inverse")
      document.body.style.backgroundColor="#242c25"
      document.body.style.color="white"
      showAlert("dark mode hase been enable")
    }
    else{
      setmode("default")
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      showAlert("light mode hase been enable")
    }
  }
  const[Gmode,setGmode]=useState("enable Green mode")
  const toggleGmode=()=>{
    if(Gmode==="enable Green mode"){
      setGmode("disable green mode")
    document.body.style.backgroundColor="#97e197"
    document.getElementById("nav_bar").style.backgroundColor="#4d804d"
    document.querySelectorAll(".achor").forEach(element => {
      element.style.color = "white";
  });
  }
  else{
    setGmode("enable Green mode")
    document.body.style.backgroundColor="white"
   document.getElementById("nav_bar").style.backgroundColor=" #f9f8f8"
   document.querySelectorAll(".achor").forEach(element => {
    element.style.color = "black";
});
  }


  }
 return(
    <Router>
  <div>
  {/* <RouterProvider route={route} >

  </RouterProvider> */}
  <Navebar title={"textUtil"} abouts={"about_us"} mode={mode} gmode={Gmode} toggleGmode={toggleGmode} togglemode={togglemode}/>
    <div className="container my-3">
    <Alert alert={alert} />
    <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact path="/home"
              element={
                <Textform
                  heading="Enter your text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          <Route exact path="/login" element={<Login/>} />
          </Routes>
    
    

     </div> 
  </div> 
  
     </Router>
     
)
}


export default App
