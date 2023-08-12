import './App.css';
import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import { Container } from "react-bootstrap"
import States from './Components/States';
import Main from './Components/Conditional/Main';
import Keys from './Components/Keys/Keys';
import Effects from './Components/Effects';
import Fetch from './Components/Fetch';
function App() {  

const name ='suhail'
const message= ()=>{
  return 'good morning '
}
 const states=[
  {name:"kerala", language:"malayalam",population:1000},
  {name:"TamilNad",language:"Tamil",population:2000}
 ]

 let number=1;
 const checkNumber = ({ number }) => {
  if (number < 0) {
    return <h1>Number is negative</h1>;
  } else {
    return <h1>Number is positive</h1>;
  }
};

  return (
    <div className="App">
    <Container>
      <Header/>
      <Main isLogged={false}/>
      <table>
      <Row/>
      <Column/>
      </table>
      <Home/> 
      <checkNumber/>
      <Keys/>
      <Effects />
      <States states={states}/>
      <Fetch/>
      
      </Container>

    </div>
  );
}


function Row(){

  return (
<div>
    <tr>
    <th>Name</th>
    <th>Place</th>
    </tr>
</div>

  )

  
}

function Column(){

  return (
<div>
    <tr>
   <td>Sachin</td> 
   <td>Mumbai</td>
    </tr>
</div>

  )

}

export default App;
