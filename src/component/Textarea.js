import React,{useState} from 'react'
// HOOKS 
// it is new addition in react 16 .they let you use sate and other React feature without used class.


export default function Textarea(props) {
    // you declare the state in function 

    const MainText =document.querySelector("#exampleFormControlTextarea1");
    const [text, setCount] = useState("");
    // When you change the property of text (state) then you use it setText
    // setText('Enter the your thought')

    // create the function
    const ConvertToUppercase = ()=>{
        const Upper = MainText.value.toUpperCase() ;
        MainText.value=Upper;
        setCount(Upper);

        // i will used to state second variable (setCount)
        // setCount("Enter the your thought Uppercase");
    }
    const ConvertTolowercase = ()=>{
        const Lower = MainText.value.toLowerCase() ;
        MainText.value=Lower;
        setCount(Lower);
        props.showAlert("Convert to lowercase","Success");

    }


    // Handling Events
    // in the handling Event automatically passed one argument it called is Event 
    const handleOnChangeEvent=(event)=>{
        console.log(event.target.value);
        setCount(event.target.value);
    }
    // Clear All function 
    const ClearAll=(event)=>{
        setCount(MainText.value="");
    }
   
    const Copy=()=>{
        MainText.select();
        document.execCommand("copy");
    }

    // remove extra spaces in text
    const RemoveExtraSpace=()=>{
        const remove=MainText.value.split(/[ ]+/);
        MainText.value=(remove.join(" "));
        setCount(remove.join(" "));
    }

    // remove all space in the text
    const RemoveAllSpace=()=>{
        // const AllSpace=
        const AllRemoveSpace=MainText.value.split(/[ ]+/);
        MainText.value=AllRemoveSpace;
        setCount(AllRemoveSpace.join(""));
    }

    // const Capitalize=(word)=>{
    //     const lower =word.toLowerCase();
    //     return lower.charAt(0).toUpperCase()+ lower.splic(1);

    // }
    

  return (
    <>
    <div className="container-fluid" >
        <h1 style={{color:props.mode==='Dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3 " id="TextAreaBox">
            <textarea className="form-control"   onChange={handleOnChangeEvent}  id="exampleFormControlTextarea1" rows="5" 
            style={{backgroundColor:props.mode==='Dark'?'#4b484b':'white',color:props.mode==='Dark'?' #1fc6dd':'black',fontWeight:590}}>

            </textarea>
        </div>
        <div className="button">
        {/* <button className=" btn btn-outline-dark mx-2 my-2" onClick={Capitalize} style={{backgroundColor:'red' ,color:'white'}}>Captitalise</button> */}
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={ConvertToUppercase}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={ConvertTolowercase}>Convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-warning  mx-2 my-2" onClick={RemoveExtraSpace}>Remove Extra spaces</button>
            <button disabled={text.length===0}  type="button" className="btn btn-danger  mx-2 my-2" onClick={RemoveAllSpace}>Remove all space</button>
            <button disabled={text.length===0} className="CopyRight btn btn-success mx-2 my-2" onClick={Copy}>Copy</button>
            <button disabled={text.length===0} className="clear btn btn-outline-dark mx-2 my-2" onClick={ClearAll} style={{backgroundColor:'orange' ,color:'white'}}>Clear</button>

            {/* convert to font style 
          
            convert to first letter captle 
            convert to i tags
            convert to bold 
            convert to undo and redo */ }
        </div>
    </div>
    <div className="conatiner-fluid my-4">
        <h2 style={{color:props.mode==='Dark'?'white':'black'}}>
            Your Text Summary
            </h2>
        <p style={{color:props.mode==='Dark'? '#837171':'black'}}>
             {text.split(" ").filter((element)=>{return element.length!== 0}).length} words and {text.length} characters
             </p>
        <p className="my-2"  style={{color:props.mode==='Dark'? '#837171':'black'}}>
             {0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read
             </p>
        <h2 style={{color:props.mode==='Dark'?'white':'black'}}>
            Preview 
        </h2>
        <pre style={{color:props.mode==='Dark'? '#837171':'black'}}>
            {0<text.length?text:"Enter something in the textbox above to preview it here"}
            </pre>
    </div>
    </>
    
  );
}
