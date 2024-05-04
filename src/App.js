import './App.css';
import Navbar from './component/Navbar';
// import AboutUs from './component/AboutUs';
import Textarea from './component/Textarea';
import React ,{ useState } from 'react';
// import Alert from './component/Alert';

// import the router file in the page
// import {BrowserRouter as Router, 
//   Switch,
//   Route,
//   } from "react-router-dom";


function App() {
  // how to change the tittle per second 
  // // this is not good for you website but ase you want
  // setInterval(() => {
  //   document.title="this is the text "
  // }, 1200);
  // setInterval(() => {
  //   document.title="this is not to good"
  // }, 2000);




// this is alert of the state?
  // const [alert ,setalert]=useState('this is good ');
  const showAlert=(msg,type)=>{
    // setalert({
    //   msg: msg,
    //   type: type
    // });
  }




  // this is mode of dark and light state
  const [light,dark]= useState('Light');

  const toggleMode=()=>{
    if(light==='Light'){
      dark('Dark');
      document.body.style.backgroundColor='black'
      showAlert("This is the good for night mode","Success")
    }
    else{
      dark('Light');
      document.body.style.backgroundColor='white'
      showAlert("This is the good for night mode","Success")

    }
  }
  return (

      <>

      {/* <Router> */}
        <Navbar title="TextUlite" aboutText="About Us"  homeText="Home" contactText="Contact US" mode={light} toggleMode={toggleMode}/>
        {/* alert file  */}
        {/* <Alert  Alert={alert} / > */}


        <div className="conatiner-fluid my-3 mx-4">
        {/* <Textarea heading="Enter the Text to analyze below"  showAlert={showAlert} mode={light}/>
        <AboutUs/> */}
        {/* Dark and light mode button */}
        {/* <AboutUs/> */}
        {/* <Switch>
              <Route path="/About">
                <AboutUs />
              </Route>
              <Route path="/"> */}
              <Textarea heading="Enter the Text to analyze below"  showAlert={showAlert} mode={light}/>
              {/* </Route>
         </Switch>   */}
        </div>
        {/* </Router> */}
       </>
  );
}



export default App;
