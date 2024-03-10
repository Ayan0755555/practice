import React, { useState } from 'react'

const Three = () => {

    const [input,setInput] = useState('')
    const [todos,setTodos] = useState([])

    const add = () => {

    }
  return (
    <div>
      <input type="text" onChange={(e)=> setInput(e.target.value)} />
      <button onClick={add}>Add</button>
      <ul>
      <button>remove</button>
      </ul>
    </div>
  )
}

export default Three
