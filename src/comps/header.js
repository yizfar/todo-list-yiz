import React from 'react';
import { Link } from 'react-router-dom';

function Header(props){
  return(
    <header  className='container-fluid bg-success shadow'>
      <div className="container">
        <div className="row align-items-center">
          <div className="logo col-md-auto">
            <h2>Todo list</h2>
          </div>
     
        </div>
      </div>
    </header> 
  )
}

export default Header