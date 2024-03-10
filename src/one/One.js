import React, { useState } from 'react'
import '../App.css'

const One = () => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count=> count + 1)
    }

    const handleMinus = () => {
        setCount(count => count - 1)
    }
  return (
    <div>
      <button onClick={handleAdd} >+</button>
      <span>{count}</span>
      <button onClick={handleMinus}>-</button>
    </div>
  )
}

export default One
