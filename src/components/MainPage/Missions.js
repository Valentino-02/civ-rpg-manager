import React from 'react'
import { usePlayerDataContext } from '../../context/playerDataContext'
import AddEntryInputField from '../GeneralUse/AddEntryInputField'
import ProgBarDelete from '../GeneralUse/ProgressBars/ProgBarDelete'


const Missions = () => {
    const { civData, addMission, deleteMission, setMissionProgress } = usePlayerDataContext()
    
    const missions = civData.missions ? civData.missions : []

    return (<>
        <AddEntryInputField 
            nameLabel='Mission Name'
            dscLabel='Time / Mission Points'
            handleAddEntry={(name, dsc) => addMission(name, dsc)}
        />

        {missions.length !== 0 ? missions.map((mission, index) => (
            <ProgBarDelete 
                key={index} 
                progressBarLabel={mission.name}
                points={mission.progress}
                maxPoints={mission.maxProgress}
                handleDelete={() => deleteMission(mission.name)}
                handleModifyValue={(value, operation) => setMissionProgress(mission.name, value, operation)} 
            />
        )) : null} 
  </>)
}

export default Missions