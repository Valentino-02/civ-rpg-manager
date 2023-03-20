import React from 'react'
import { usePlayerDataContext } from '../../context/playerDataContext'
import AddEntryInputField from '../GeneralUse/AddEntryInputField'
import ProgBarDelete from '../GeneralUse/ProgressBars/ProgBarDelete'


const Missions = () => (
        <>
            <AddMissionField/>
            <MissionProgressBar/>
        </>
)

const AddMissionField = () => {

    const { pushCivProp } = usePlayerDataContext()

    return (
    <AddEntryInputField 
        nameLabel='Mission Name'
        dscLabel='Time / Mission Points'
        handleAddEntry={(name, maxProgress) => pushCivProp('missions', {name, maxProgress: Number(maxProgress), progress: 0})}
    />
    )
}

const MissionProgressBar = () => {

    const { civData, filterCivProp, setCivProp } = usePlayerDataContext()
    const missions = civData.missions ? civData.missions : []
    
    return (
    missions.length !== 0 ? missions.map((mission, index) => (
        <ProgBarDelete 
            key={index} 
            progressBarLabel={mission.name}
            value={mission.progress}
            maxValue={mission.maxProgress}
            handleDelete={() => filterCivProp('missions', mission.name)}
            handleModifyValue={(value) => setCivProp(`missions.${index}.progress`, value)} 
        />
    )) : null
    )
}

export default Missions