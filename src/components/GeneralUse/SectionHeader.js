import React, {useState } from 'react'

const SectionHeader = ({ component, name }) => {
  const [showElement, setShowElement] = useState(true)

  return (
    <>
      <div className='flex items-center gap-8 mt-4 mb-4'>
      <i className={'duration-100 cursor-pointer text-2xl sm:text-4xl hover:scale-110 fa-solid fa-book-open ' + (showElement ? "" : "opacity-50")} onClick={() => setShowElement(s => !s)}/>
        <div className="text-2xl font-extrabold select-none sm:text-4xl">{name}</div>
        
      </div >
      <div className=''>
        {showElement && component}
      </div>
    </>
  )
}


export default SectionHeader