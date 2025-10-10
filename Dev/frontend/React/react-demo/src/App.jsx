import { useState } from 'react'

function App({username = "nab" , password = "!1"}) {
  let [count, setCount] = useState(5)
  
  const IncrementValue = () => {
      setCount(count +1)
  } 

  const decRement = () =>{
    if(count <= 0){
      setCount(0)
    } else{
      setCount(count-1)
    }
  }
  return (
    <>
    <center>
      <h1>Learning React : {username} is {password}</h1>
      <h3>Counter Value : {count}</h3>
      <button onClick={IncrementValue}>Increment</button>
      <button onClick={decRement}>Decrement</button>
    </center>
    </>
  )
}

export default App
