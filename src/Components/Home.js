import React, { useState } from 'react'
import Child from './Child'
import "./Home.css"

const Home = () => {

    const [count ,setCount]= useState(0)

    const incre=()=>{
        setCount(count+1);
    }
     
    const Decre=()=>{
        setCount(count-1)
    }
  return (
    <div  className="home">
    <h1 >Home Component</h1>
    <Child/>

    <h1 >Counter is {count}</h1>
    <button className="m-2" onClick={incre}>+</button>
    <button className='m-2' onClick={Decre}>-</button>
    </div>
  )
}

export default Home