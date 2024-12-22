import {useState} from "react";

function About(){
   const [mystyle,setMystyle]=useState({
    
        backgroundColor:"white",
        color:"black",
    }
   )
   const [bottontext,setButtontext]=useState("enable dark mode")

   const toggleStyle=()=>{
    if(mystyle.color==="black"){
        setMystyle(
            {
                backgroundColor:"black",
                color:"white",
            }
        )
        setButtontext("enable light mood")
    }
    else{
        setMystyle(
            {
    
                backgroundColor:"white",
                color:"black",
            }
        )
        setButtontext("enable dark mood")
    }
   }
    return(
        <div className="container" >
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true" style={mystyle}>
  <div className="panel panel-default">
    <div className="panel-heading" role="tab" id="headingOne" style={mystyle}>
      <h4 className="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="/" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </a>
      </h4>
    </div>
    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div className="panel-body" style={mystyle}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="panel panel-default">
    <div className="panel-heading" role="tab" id="headingTwo" style={mystyle}>
      <h4 className="panel-title">
        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="/" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </a>
      </h4>
    </div>
    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div className="panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="panel panel-default">
    <div className="panel-heading" role="tab" id="headingThree" style={mystyle}>
      <h4 className="panel-title">
        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="/" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </a>
      </h4>
    </div>
    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <div className="panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
<button type="button" className="btn-primary my-3" onClick={toggleStyle}>{bottontext}</button>

 
        </div>

    )
}
export default About;