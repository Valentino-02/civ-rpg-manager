import React from 'react'

import ProgressBar from './ProgressBar'
import AddSubtractBtn from '../SimpleBtns/AddSubtractBtn'

const ProgBarWithBtns = ({value, maxValue, type, handleModifyValue, extraBtns=[]}) => {
  return (
    <div className="flex items-stretch gap-2">
      <ProgressBar value={value} maxValue={maxValue} />
      <AddSubtractBtn 
        type={type}
        handleAdd={(type, value) => handleModifyValue(type, value, 'add')} 
        handleSubtract={(type, value) => handleModifyValue(type, value, 'subtract')} 
      />
      {extraBtns.length !== 0 ? extraBtns.map((btn, index) => (btn)) : null }
    </div>
  )
}

export default ProgBarWithBtns