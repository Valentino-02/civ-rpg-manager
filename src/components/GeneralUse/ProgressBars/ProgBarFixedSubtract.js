import React from 'react'

import ProgBarWithBtns from './ProgBarWithBtns'

const ProgBarFixedSubtract = ({ value, maxValue, type, handleModifyValue }) => {
  return (
    <ProgBarWithBtns 
      value={value} 
      maxValue={maxValue}
      type={type} 
      handleModifyValue={handleModifyValue} 
      extraBtns={[<i onClick={() => handleModifyValue(type, maxValue, 'subtract')} className="pt-3 text-xl duration-200 cursor-pointer fa-solid fa-square-minus hover:text-cyan-300" />]}
    />
  )
}

export default ProgBarFixedSubtract