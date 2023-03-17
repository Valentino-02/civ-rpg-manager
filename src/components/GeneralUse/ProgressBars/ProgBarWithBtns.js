import React from 'react'

import ProgressBar from './ProgressBar'
import AddSubtractBtn from '../SimpleBtns/AddSubtractBtn'

const ProgBarWithBtns = ({value, maxValue, handleModifyValue, extraBtns=[], progressBarLabel='Progress Bar' }) => {
  return (
    <div className="flex items-stretch gap-2">
      <ProgressBar value={value} maxValue={maxValue} label={progressBarLabel} />
      <AddSubtractBtn 
        handleAdd={(virtualValue) => handleModifyValue(virtualValue + value)} 
        handleSubtract={(virtualValue) => handleModifyValue(value - virtualValue)} 
      />
      {extraBtns.length !== 0 ? extraBtns.map((btn) => (btn)) : null }
    </div>
  )
}

export default ProgBarWithBtns