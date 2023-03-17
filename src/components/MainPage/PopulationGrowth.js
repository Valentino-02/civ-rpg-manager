import React from 'react'
import { usePlayerDataContext } from '../../context/playerDataContext'
import getPopulationSizeTag from '../../utils/populationSizeTags'
import ProgBarWithBtns from '../GeneralUse/ProgressBars/ProgBarWithBtns'
import AddSubtractBtn from '../GeneralUse/SimpleBtns/AddSubtractBtn'


const PopulationGrowth = () => {
    const { civData, setCivProp } = usePlayerDataContext()
    
    const data = civData.populationGrowth
    const extraFood = data.progress ? data.progress : 0
    const populationSize = data.populationSize ? data.populationSize: 0
    const maxPoints = 10

    return (
        <>
            <ProgBarWithBtns 
                value={extraFood} 
                maxValue={maxPoints} 
                handleModifyValue={(value) => setCivProp('populationGrowth.progress', value)}
                progressBarLabel={'Extra Food'}
            />
            <PopulationSize 
                name={getPopulationSizeTag(populationSize)}
                handleModifyValue={(value) => setCivProp('populationGrowth.populationSize', (populationSize + value))}
            />
        </>
  )
}


const PopulationSize = ({ name, handleModifyValue }) => {
    return(
        <div className="flex items-stretch gap-2">
            <span className="text-base font-medium text-white select-none">{name}</span>
            <AddSubtractBtn
                handleAdd={(value) => handleModifyValue(value)} 
                handleSubtract={(value) => handleModifyValue(-value)} 
            />
        </div>
    )
}

export default PopulationGrowth