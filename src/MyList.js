import React, { Component } from 'react'
import './App.css';
import './List.css';

import App from './createNewThing';

function MyList() {
  return (
    

    <div class="todo">
      <div class="container">
      <h1>Things to do:</h1>
      <App />
      </div>
      
      
     
    </div> 
  );
}


export default MyList