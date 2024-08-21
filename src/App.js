import './App.css';
import TextArea from './components/textarea';
import Navbar from './components/navbar';
import React, {useState} from 'react';

function App() {
  let style = document.body.style;
const[mode, setMode] = useState("light");
const[color, setColor] = useState("black");
const toggleMode = () => {
  if(mode === "light"){
    setMode("dark")
    setColor("white")
    style.backgroundColor = "black"
    style.color = "white"
  }
   else{
    setMode("light")
    setColor("black")
    style.backgroundColor = "white"
    style.color = "black"
  };
}




  return (
   <>
   <Navbar theme = {mode} title = "My-App" toggleMode = {toggleMode} color = {color}/> 
   <TextArea heading = "Enter Text Here"/>
   </> 
  );
}

export default App;
