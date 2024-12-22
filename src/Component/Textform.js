import  { useState } from "react";

function Textform(props) {
  const  botn={
        marginLeft:"2px",
        marginLeft:"2px",
    }
    const [text, settext] = useState("");

    const handleclick = () => {
        console.log("Convert to uppercase clicked");
        const newtext = text.toUpperCase();
        settext(newtext);
        props.showAlert("converted to uper case")
    };
    const handleloclick = () => {
        console.log("Convert to lowercase clicked");
        const newtext = text.toLowerCase();
        settext(newtext);
        props.showAlert("converted to lowercase case")
    };

    const handlechange = (event) => {
        console.log("Event is listening");
        settext(event.target.value); // Update the state with the input's value
    };
    const handlecopyclick = () => {
       let text=document.getElementById('mybox')
       text.select()
       navigator.clipboard.writeText(text.value)
       props.showAlert("copied the text on clip board")

      };
const handlespace=(event)=>{
    let newtext=text.split(/[ ]+/)
    settext(newtext.join("  "))
    props.showAlert("removed the extra spaces")

}
const handlclear=()=>{
    let newtext=""
    settext(newtext)
}
    return (
        <>
        <div>
            <h1>{props.heading}</h1>

            <textarea
    onChange={handlechange}
    style={{
        backgroundColor:props.mode==="inverse"?"gray":"white",
        color:props.mode==="inverse"?"white":"black",
    }}
   
    id="mybox"
    className="form-control"
    value={text} // Controlled input
   
    rows="5" // Controls the height (number of rows)
    cols="50" // Controls the width (number of characters per line)
/>
<button className="btn btn-primary mx-3" onClick={handleclick}>click to Convert upper case</button>
<button className="btn btn-primary mx-3" onClick={handleloclick} style={botn}>click to Convert lower case</button>
<button className="btn btn-primary gap-3" onClick={handlecopyclick} style={botn}>COPY</button>
<button className="btn btn-primary gap-3" onClick={handlespace} style={botn}>remove extra spaces</button>
<button className="btn btn-primary gap-3" onClick={handlclear} style={botn}>clear all</button>
<h2> your text summary</h2>
{
    text.trim().split(" ").filter(word => word !== "").length
  } <b>words</b> {text.length} <b>characters</b>
<h2 className="mt-4"></h2>
        </div>
        <div className="container">
            <h3>Preview</h3>
            <p style={{
                 border: "1px solid black",
                 width: "400px",
                 height: "200px",
                 overflowX: "hidden", // Already there
                 wordWrap: "break-word", // Add this property
                 overflowY: "auto"
               
                
            }}>{text}</p>
            <h2>reading time</h2>
            <p>{0.008*text.split(" ").length} <strong>minutes</strong></p>
            <p><span><h3>sentance:</h3></span>{text.split(".").length}</p>
        </div>

        </>
    );
}

export default Textform;
