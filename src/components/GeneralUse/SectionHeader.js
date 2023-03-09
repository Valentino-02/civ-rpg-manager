import React, { Children } from 'react'
import { useState } from 'react'

const SectionHeader = ({component, name}) => {

  const [showElement, setShowElement] = useState(true)

  return (
    <>
      <div className='flex gap-8 flex-items-center mb-4 mt-4'>
        <div className="font-extrabold select-none text-2xl sm:text-4xl mt-2">{name}</div>
        <i className={'text-2xl ' + (showElement ? "fa-solid fa-caret-down" : "fa-solid fa-caret-right")} onClick={() => setShowElement(s => !s)}/>
      </div>
      {showElement && component}
    </>
  )
}



export default SectionHeader