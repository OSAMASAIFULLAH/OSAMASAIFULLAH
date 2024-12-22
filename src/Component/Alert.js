// import React from "react";
function Alert(props){
    return(
        props.alert &&  <>
        <div className="alert alert-success" role="alert" >success:{props.alert}</div>
        </>
    )
}
export default Alert;