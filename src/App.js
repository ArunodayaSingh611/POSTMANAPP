import React,{useState} from 'react'
const App=() =>{
  const [input,setinput]=useState("")
  const [res,setres]=useState([])
  console.log(res)
  console.log(input)
  const url=input
  const fetchData=async(url)=>{
    const res=await fetch(`${url}`)
    const data=await res.json()
    setres(data)



    
  }

  
 
  return (
<>
<div>
      <select>
        <option>
          Get
          </option>
          <option>
            Post
            </option>
       <option>
         Delete
         </option>
        </select>
        <input type="text" value={input} onChange={(e)=>setinput(e.target.value)}/>
        <button onClick={()=>fetchData(url)}>
          Send
          </button>
          
    </div>
    
    <div>
      
      <textarea style={{width:"50%", height:"300px"}} value={JSON.stringify(res)}/>
      </div>
      </>
  )
}

export default App
