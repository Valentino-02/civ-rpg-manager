import React, { useState } from 'react'

const SubSectionHeader = ({ component, name }) => {
    const [showElement, setShowElement] = useState(true)

    return (
      <>
        <div className='flex items-center justify-center gap-8 mt-4 mb-4'>
          <div className="font-extrabold select-none text-1xl sm:text-2xl">{name}</div>
          <i className={'sm:text-2xl text-1xl duration-100 cursor-pointer hover:text-cyan-300 ' + (showElement ? "fa-solid fa-caret-down" : "fa-solid fa-caret-down opacity-50")} onClick={() => setShowElement(s => !s)}/>
        </div >
        <div className='px-2'>
          {showElement && component}
        </div>
      </>
    )
}

export default SubSectionHeader