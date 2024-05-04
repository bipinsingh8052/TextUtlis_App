import React from 'react'
// import the proptype file
// in prop you pass any think you pass the array and object
// That is main work is this how to you used

import ProtoType from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg" id={'navbarMain'}>
          <div className="container-fluid" >
            <a className="navbar-brand" href="/" id="logo">
              {/* you used the props value  */}
              {props.title}
              </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-3">
                  <a className="nav-link active" aria-current="page" href="/">{props.homeText}</a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link" href="/About">{props.aboutText}</a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link" href="ContactUs">{props.contactText}</a>
                </li>
              </ul>
              <div className="color" >
               
              </div>
              <div className="form-check form-switch mx-3 mt-2 pt-2">
                <input className="form-check-input check-dark" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <p>{props.mode}</p>
              </div>
            </div>
          </div>
       </nav>
  );
}

//  you declare the proptype in the (it we check it then your code we run)
// that is the check it what you send the value 
Navbar.prototype = {
  // that is when you not passed the value they give error!
  title:ProtoType.string.isRequired,
  aboutText:ProtoType.string,
  contactText: ProtoType.string,
  homeText: ProtoType.string

}

// you also used the Deflaut protoType
// it mains when you not passed any value they automatically filled that placed
Navbar.defaultProps = {
  title: 'set the logo of you company',
  aboutText:'You write some information in your self',
  contactText: 'you write your contact no:',
  homeText:'You enter your home page'
}
