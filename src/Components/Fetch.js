import React, { useEffect, useState } from 'react'


const Fetch = () => {

    const [posts, setPost]= useState([])
    const [currentIdx,setCurrent]=useState(0)


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(posts=>setPost(posts.splice(0,100)))
    },[])
    
   const HandleFunction=()=>{
        if(currentIdx<posts.length){
            setCurrent(currentIdx + 1)
        }else{
            setCurrent(0)
        }
   }

    

  return (
    <div>
      <h1>Api Fetch</h1>
      <div>{posts.length>0 && posts[currentIdx].title}</div>
      <button onClick={HandleFunction}>Click</button>
    </div>
  )
}

export default Fetch
