import React from 'react';

import { usePlayerDataContext } from '../../context/playerDataContext';

import AddEntryInputField from '../GeneralUse/AddEntryInputField';
import AddedEntry from '../GeneralUse/AddedEntry';
import SectionHeader from '../GeneralUse/SectionHeader';
import ProgBarFixedSubtract from '../GeneralUse/ProgressBars/ProgBarFixedSubtract';


const Advancements = () => {
  const {
    playerData, addAdvancement, deleteAdvancement, setProgressValue,
  } = usePlayerDataContext();

  const technologies = playerData.technologies ? playerData.technologies : [];
  const beliefs = playerData.beliefs ? playerData.beliefs : [];
  const civics = playerData.civics ? playerData.civics : [];

  const techProgress = playerData.progressBars.science ? playerData.progressBars.science : 0;
  const techMaxValue = playerData.technologies ? 10 + 3 * playerData.technologies.length : 10;
  const beliefProgress = playerData.progressBars.religion ? playerData.progressBars.religion : 0;
  const beliefMaxValue = playerData.beliefs ? 10 + 3 * playerData.beliefs.length : 10;
  const civicProgress = playerData.progressBars.influence ? playerData.progressBars.influence : 0;
  const civicMaxValue = playerData.civics ? 10 + 3 * playerData.civics.length : 10;

  return (
    <>
      <SectionHeader name={'Technologies'} component={
        <AdvancementEntryManager
          advancementList={technologies}
          type={'technology'}
          value={techProgress}
          maxValue={techMaxValue}
          addAdvancement={addAdvancement}
          deleteAdvancement={deleteAdvancement}
          modifyAdvancementValue={setProgressValue} 
        />} 
      />
      <SectionHeader name={'Beliefs'} component={
        <AdvancementEntryManager
          advancementList={beliefs}
          type={'belief'}
          value={beliefProgress}
          maxValue={beliefMaxValue}
          addAdvancement={addAdvancement}
          deleteAdvancement={deleteAdvancement}
          modifyAdvancementValue={setProgressValue} 
        />} 
      />
      <SectionHeader name={'Civics'} component={
        <AdvancementEntryManager
          advancementList={civics}
          type={'civic'}
          value={civicProgress}
          maxValue={civicMaxValue}
          addAdvancement={addAdvancement}
          deleteAdvancement={deleteAdvancement}
          modifyAdvancementValue={setProgressValue} 
        />} 
      />
    </>
  );
}

const Technologies = () => {
  const {
    playerData, addAdvancement, deleteAdvancement, setProgressValue,
  } = usePlayerDataContext();

  const technologies = playerData.technologies ? playerData.technologies : [];
  const techProgress = playerData.progressBars.science ? playerData.progressBars.science : 0;
  const techMaxValue = playerData.technologies ? 10 + 3 * playerData.technologies.length : 10;

  return (
    <AdvancementEntryManager
      advancementList={technologies}
      type={'technology'}
      value={techProgress}
      maxValue={techMaxValue}
      addAdvancement={addAdvancement}
      deleteAdvancement={deleteAdvancement}
      modifyAdvancementValue={setProgressValue} 
    />
  )
}


const AdvancementEntryManager = ({ advancementList, type, value, maxValue, addAdvancement, deleteAdvancement, modifyAdvancementValue }) => {
  return(
    <>
      <ProgBarFixedSubtract value={value} maxValue={maxValue} type={type} handleModifyValue={(type, value, operation) => modifyAdvancementValue(type, value, operation)} />
      <AddEntryInputField type={type} handleAddEntry={(name, dsc, type) => addAdvancement(name, dsc, type)} />
      {advancementList.length !== 0 ? advancementList.map((advancement, index) => (
        <AddedEntry key={index} name={advancement.name} dsc={advancement.dsc} type={type} handleDeleteEntry={(name, fieldName) => deleteAdvancement(name, fieldName)} />
      )) : null}
    </>
  )
}

export default Advancements;
