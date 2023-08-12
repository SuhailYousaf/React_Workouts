import React, { useState } from 'react'
import "./Header.css"
const Header = () => {
    const ClickHandle=()=>{
        console.log("click Handle")
    }
    const DbClick =(name)=>{
        alert("hello " +name)
    };
 const Type =()=>{
    alert("you typing ...")
 }
 const Over=()=>{
    console.log ("you mouseOver on element....")
 }
  
 const [color, setColour]=useState('green')
 const ChangeColor=()=>{
    setColour("red")
 }


  return (
    <div>
       <h1 className='header'>Header Component</h1>
         <button onClick={ClickHandle} >ClickME</button>
         <h1 onDoubleClick={() => DbClick("Suhail")}>DoubleClick</h1>
          <input onChange={Type} ></input>
          <h1 onMouseOver={Over}>MouseOver</h1>
          <h1>My Favourite Colour is {color}</h1>
          <button  onClick={ChangeColor}>ColorChange</button>
         </div>
  )
}

export default Header