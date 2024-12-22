import React from "react";
import { FaCloudMoon } from "react-icons/fa";
import { Link } from "react-router-dom";


function Navebar(props){
return(
    <>
      <nav className={`navbar navbar-${props.mode}  bg-${props.mode}  `} id="nav_bar">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand achor" href="/" >
              {props.title}
            </Link>
          </div>
  
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active">
                {/* <link to="/About"> */}
                <Link to="/about" className="achor">
                  {props.abouts} <span className="sr-only">(current)</span>
                </Link>
                {/* </link> */}
              </li>
              <li>
                <Link to="/home" className="achor">Home</Link>
              </li>
              <li>
                <Link to="/login" className="achor">Login</Link>
              </li>
              </ul>
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">
                Submit
              </button>
            </form>
            <ul className="nav navbar-nav navbar-right">
            
              <li className="dropdown">
  
              <div className="custom-control custom-switch" style={{
                display:"flex",
              //  width:"400px",
                marginTop:"8px",
               justifyContent:"center",
              //  justifyContent:"space-evenly"
              }}>
  <div className="form-check" >
   <FaCloudMoon onClick={props.togglemode}/>
  
  
</div>
<div className="form-check" style={{
    paddingLeft:"20px"
  }}>
     <FaCloudMoon onClick={props.toggleGmode}/>

 
</div>
</div>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/about">Action</Link>
                  </li>
                  <li>
                    <Link to="/login">Action</Link>
                  </li>
                  <li>
                    <href href="/">Another action</href>
                  </li>
                  <li>
                    <a href="/">Something else here</a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a href="/">Separated link</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      
      </nav>
      
      </>
    )}
    export default Navebar