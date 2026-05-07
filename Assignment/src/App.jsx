import React, { useEffect, useState } from 'react'
import axios from "axios"
const App = () => {
     const[data, setdata]=useState([]);
     const[searchinput,setsearchinput]=useState("");;
     const[search,setsearch]=useState("");

     useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
          setdata(res.data);
          console.log(res.data);
        })
        .catch((err)=>{
          console.log(err)
        })
     },[])

      
     
     
  return (
    <div>
      <h1>Assignment 2</h1>

      <input
      placeholder='Enter the search title...'
      value={searchinput}
      onChange={(e)=> setsearchinput(e.target.value)}
      />

      <button onClick={()=> setsearch(searchinput)}>click</button>

      <button>View all post</button>

      {
        data
        .filter((item)=>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
        .slice(0,10).map((item)=>(
          <div key={item.id}>
            <p>Title: {item.title}</p>
            
            <p>Body: {item.body}</p>

            <br/>


          </div>

        ))
      }

    </div>
  )
}

export default App