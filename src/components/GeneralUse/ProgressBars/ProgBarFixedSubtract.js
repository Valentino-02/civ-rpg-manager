import React from 'react'

import ProgBarWithBtns from './ProgBarWithBtns'

const ProgBarFixedSubtract = ({ value, maxValue, handleModifyValue }) => {
  return (
    <ProgBarWithBtns 
      value={value} 
      maxValue={maxValue}
      handleModifyValue={handleModifyValue} 
      extraBtns={[<i onClick={() => handleModifyValue(maxValue, 'subtract')} className="pt-3 text-xl duration-200 cursor-pointer fa-solid fa-square-minus hover:text-cyan-300" />]}
    />
  )
}

export default ProgBarFixedSubtract

// This Component is only used in MainPage/Advancements. Might be best to move it there