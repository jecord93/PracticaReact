import React from 'react';
import './App.css';

function HelloWorld(props) {
  return (
    <div id="hello">
      <h1>{props.myText}</h1>
    </div>
  );

}

function App() {
  return (
    <div>This is my component: 
      <HelloWorld myText="Hello PC"/> 
      <HelloWorld myText="¿Cómo estás?"/> 
    </div>

  );
}

export default App;
