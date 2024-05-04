import React ,{useState} from 'react'

export default function AboutUs() {

    
    const [btntext,btntextChange]=useState("Enable dark mode");
    const [dark,light]=useState({
        color:'white',
        backgroundColor:'black'
    });
    const changeState=()=>{
        if(dark.color ==='white'){
            light({
                color:'black',
                backgroundColor:'white',
            })
            btntextChange("Enable light mode");   
        }
        else{
            light({
                color:'white',
                backgroundColor:'black',
            })
            btntextChange("Enable dark mode");   
        }
    }


    
    
  return (
    
    <div className="conatiner-fluid" style={dark}>
        <h1>About us</h1>
        <button className="btn btn-primary" onClick={changeState}>{btntext}</button>
        <div className="accordion accordion-flush" id="accordionFlushExample" style={dark}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={dark}>
                    Accordion Item #1
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={dark}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                </div>
            </div>
            <div className="accordion-item" style={dark}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={dark}>
                    Accordion Item #2
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
            </div>
            <div className="accordion-item" style={dark}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={dark}>
                    Accordion Item #3
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
            </div>
        </div>
    </div>
  )
}
