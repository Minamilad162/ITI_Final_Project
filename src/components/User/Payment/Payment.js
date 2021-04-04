import React, { Component } from 'react';

class navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div >
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <a className="navbar-brand p-2 flex-grow-1 bd-highlight" style={{color:'red'}} href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
            <a className="nav-link " style={{color:'yellow'}} href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" style={{color:'yellow'}} href="#">Features</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" style={{color:'yellow'}} href="#">Pricing</a>
            </li>
            <li className="nav-item">
        <   a className="nav-link disabled"style={{color:'yellow'}} href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
</div>
         );
    }
}
 
export default navbar;