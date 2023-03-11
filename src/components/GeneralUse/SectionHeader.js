import React, {useState } from 'react'

const SectionHeader = ({ component, name }) => {
  const [showElement, setShowElement] = useState(true)

  return (
    <>
      <div className='flex items-center gap-8 mt-4 mb-4'>
        <div className="text-2xl font-extrabold select-none sm:text-4xl">{name}</div>
        <i className={'text-2xl ' + (showElement ? "fa-solid fa-caret-down" : "fa-solid fa-caret-right")} onClick={() => setShowElement(s => !s)}/>
      </div >
      <div className=''>
        {showElement && component}
      </div>
    </>
  )
}



export default SectionHeader