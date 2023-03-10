import React from 'react'

import ProgBarWithBtns from './ProgBarWithBtns'

const ProgBarDelete = ({ value, maxValue, handleModifyValue, handleDelete, progressBarLabel }) => {
  return (
    <ProgBarWithBtns 
      progressBarLabel={progressBarLabel}
      value={value} 
      maxValue={maxValue}
      handleModifyValue={handleModifyValue} 
      extraBtns={[<i onClick={handleDelete} className="pt-3 pl-2 text-xl duration-200 cursor-pointer fa-solid fa-trash hover:text-rose-500"></i>]}
    />
  )
}

export default ProgBarDelete

// This Component is only used in MainPage/Missions. Might be best to move it there