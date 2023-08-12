import React, { useEffect, useState } from 'react'

const Effects = () => {

const [count,setCount]= useState(0)
const [count1,setCount1]= useState(0)
useEffect(()=>{
    console.log("side Effect")
},[count])

  return (
    <div>
    
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>+</button>
    <h1>{count1}</h1>
    <button onClick={()=>setCount1(count1+1)}>+</button>
    </div>
  )
}

export default Effects
