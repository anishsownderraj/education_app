import React, { Component } from 'react';

class NavBar extends Component {



  render(){
    return(
        <div className="nav">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header" style={{paddin:'10px'}}>
                        <h1 style={{fontSize:'25px',color:'black',border: '5px solid black',letterSpacing: '5px',padding: '2px'}}>
                        Specialized Success<i style={{fontSize:'10px'}}>©</i>
                        </h1>

                    </div>
                </div>
            </nav>
        </div>
        );
    }
}

export default NavBar;