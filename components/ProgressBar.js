import React from 'react'

const ProgressBar = ({ value, maxValue, label='Progress Bar' }) => {
    const shouldAddNew = value >= maxValue
    const progress = shouldAddNew ? 100 : (value/maxValue) * 100
    

    return (    
        <div className="mb-2">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-white">{label}</span>

                {shouldAddNew ? 
                    <span className="text-sm font-medium text-cyan-400 ">{`${value}/${maxValue}`}</span>
                    : 
                     <span className="text-sm font-medium text-rose-800">{`${value}/${maxValue}`}</span>
                }

            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-stone-700">
                <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: `${progress}%`}} />
            </div>
        </div>
    )
}

export default ProgressBar