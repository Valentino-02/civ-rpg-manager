import React, {useState } from 'react'

const SectionHeader = ({ component, name }) => {
  const [showElement, setShowElement] = useState(true)

  return (
    <div className='bg-sky-900/50'>
      <div className='flex items-center gap-8 mt-2 mb-2 px-8'>
      <i className={'duration-100 cursor-pointer text-2xl sm:text-4xl hover:scale-110 fa-solid fa-book-open ' + (showElement ? "" : "opacity-50")} onClick={() => setShowElement(s => !s)}/>
        <div className="text-2xl font-extrabold select-none sm:text-4xl">{name}</div>
        
      </div >
      <div className=''>
        {showElement && component}
      </div>
    </div>
  )
}


export default SectionHeader