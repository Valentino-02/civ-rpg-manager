import React from 'react';

import { usePlayerDataContext } from '../../context/playerDataContext';

import AddEntryInputField from '../GeneralUse/AddEntryInputField';
import AddedEntry from '../GeneralUse/AddedEntry';
import SectionHeader from '../GeneralUse/SectionHeader';
import ProgBarFixedSubtract from '../GeneralUse/ProgressBars/ProgBarFixedSubtract';


const Advancements = () => {
  return (
    <>
      <SectionHeader name={'Technologies'} component={<Advancement type={'science'} />}/>
      <SectionHeader name={'Beliefs'} component={<Advancement type={'religion'} />}/>
      <SectionHeader name={'Civics'} component={<Advancement type={'civics'} />}/>
    </>
  );
}


const Advancement = ({ type }) => {
  const {
    playerData, addAdvancement, deleteAdvancement, setProgressValue,
  } = usePlayerDataContext();

  const data = playerData.knowledge[type]
  const list = data.advancements ? data.advancements : [];
  const progress =  data.progress ? data.progress : 0;
  const maxProgress = 10;

  return (
    <AdvancementRenderer
      list={list}
      value={progress}
      maxValue={maxProgress}
      addAdvancement={(name, dsc) => addAdvancement(name, dsc, type)}
      deleteAdvancement={(name) => deleteAdvancement(name, type)}
      modifyAdvancementValue={(value, operation) => setProgressValue(value, operation, type)} 
    />
  )
}

// We could merge Advancement and AdvancementRender into one component that manages both the render and the data. 
// Like we are doing on the Missions or Resources Components

const AdvancementRenderer = ({ list, value, maxValue, addAdvancement, deleteAdvancement, modifyAdvancementValue }) => {
  return(
    <>
      <ProgBarFixedSubtract 
        value={value}
        maxValue={maxValue}
        handleModifyValue={(value, operation) => modifyAdvancementValue(value, operation)} 
      />
      <AddEntryInputField handleAddEntry={(name, dsc) => addAdvancement(name, dsc)} />
      {list.length !== 0 ? list.map((advancement, index) => (
        <AddedEntry 
          key={index} 
          name={advancement.name}
          dsc={advancement.dsc}
          handleDeleteEntry={() => deleteAdvancement(advancement.name)} 
        />
      )) : null}
    </>
  )
}


export default Advancements;
