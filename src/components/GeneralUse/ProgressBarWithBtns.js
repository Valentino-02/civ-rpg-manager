import React from 'react'

import ProgressBar from './ProgressBar'
import AddSubtractBtn from './AddSubtractBtn'
import FixedSubtractBtn from './FixedSubtractBtn'

const ProgressBarWithBtns = ({ value, maxValue, type, handleModifyValue }) => {
  return (
    <div className="flex items-stretch gap-2">
        <ProgressBar value={value} maxValue={maxValue} />
        <AddSubtractBtn type={type} handleAdd={(type, value) => handleModifyValue(type, value, 'add')} handleSubtract={(type, value) => handleModifyValue(type, value, 'subtract')} />
        <FixedSubtractBtn type={type} handleSubtract={(type) => handleModifyValue(type, maxValue, 'subtract')} />
    </div>
  )
}

export default ProgressBarWithBtns