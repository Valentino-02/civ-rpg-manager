import React, { Children } from 'react'
import { useState } from 'react'

const ComponentHeader = ({component, name}) => {

  const [showElement, setShowElement] = useState(true)

  return (
    <>
      <div className='flex gap-8 items-center items-middle'>
        <div className="font-extrabold select-none text-2xl sm:text-4xl mb-2 mt-8">{name}</div>
        <i className={showElement ? "fa-solid fa-caret-down" : "fa-solid fa-caret-right"} onClick={() => setShowElement(s => !s)}/>
      </div>
      {showElement && component}
    </>
  )
}



export default ComponentHeader 