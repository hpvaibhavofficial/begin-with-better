import { useState } from 'react'
import Welcome from './Welcome'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      HI i am react demo
      <Welcome/>
    </>
  )
}

export default App
