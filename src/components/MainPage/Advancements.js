import React from 'react';

import { usePlayerDataContext } from '../../context/playerDataContext';

import AddEntryInputField from '../GeneralUse/AddEntryInputField';
import AddedEntry from '../GeneralUse/AddedEntry';
import SubSectionHeader from '../GeneralUse/SubSectionHeader';
import ProgBarFixedSubtract from '../GeneralUse/ProgressBars/ProgBarFixedSubtract';


const Advancements = () => {
  return (
    <>
      <SubSectionHeader name={'Technologies'} component={<Advancement type={'science'} />}/>
      <SubSectionHeader name={'Beliefs'} component={<Advancement type={'religion'} />}/>
      <SubSectionHeader name={'Civics'} component={<Advancement type={'civics'} />}/>
    </>
  );
}


const Advancement = ({ type }) => {
  const {
    civData, pushCivProp, filterCivProp, setCivProp,
  } = usePlayerDataContext();

  const data = civData.knowledge[type]
  const list = data.advancements ? data.advancements : [];
  const progress =  data.progress ? data.progress : 0;
  const maxProgress = 10;

  return (
    <AdvancementRenderer
      list={list}
      value={progress}
      maxValue={maxProgress}
      addAdvancement={(name, dsc) => pushCivProp(`knowledge.${type}.advancements`, {name, dsc})}
      deleteAdvancement={(name) => filterCivProp(`knowledge.${type}.advancements`, name)}
      modifyAdvancementValue={(value) => setCivProp(`knowledge.${type}.progress`, value)} 
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
        handleModifyValue={(value) => modifyAdvancementValue(value)} 
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
