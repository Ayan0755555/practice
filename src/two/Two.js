import React, { useState } from 'react'

const Two = () => {
    const[status,setStatus] = useState(false)

    const togglebutton = () => {
        setStatus(status=>!status)
    }
  return (
    <div>
      <button onClick={togglebutton}>
          {
            status ? 'Hide button':'Show button'
          }
      </button>
{
     status && <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eveniet labore aperiam numquam illo aspernatur ad provident temporibus doloremque, totam cumque, veritatis quos minus! Facilis, temporibus expedita facere quam error reiciendis nihil itaque aliquid impedit fugiat sapiente perferendis, 
      aspernatur voluptatem rem? Reiciendis, optio illo id maiores magni vel molestias asperiores!</h3>
}
    </div>
  )
}

export default Two
