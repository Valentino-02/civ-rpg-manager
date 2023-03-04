import React, { useState } from 'react';
import { useStateContext } from '../context';
import ProgressBar from './ProgressBar';

function AdvancmentField({
  name, dsc, fieldName, handleDeleteAdvancement,
}) {
  return (
    <div className="flex items-stretch divide-x border border-white border-solid">
      <input disabled type="text" placeholder={name} value={name} onChange={(e) => {}} className="outline-none p-3 text-base sm:text-lg text-white bg-teal-700 flex-auto w-4/5" />
      <input disabled type="text" placeholder={dsc} value={dsc} onChange={(e) => {}} className="outline-none p-3 text-base sm:text-lg text-white bg-teal-700 flex-auto w-1/5" />
      <button onClick={() => handleDeleteAdvancement(name, fieldName)} className="w-fit px-4 sm:px-6 py-2 sm:py-3 bg-teal-500 text-white font-medium text-base duration-300 hover:opacity-40">DEL</button>
    </div>

  );
}

function AdvancmentInput({ fieldName, handleAddAdvancement }) {
  const [name, setName] = useState('');
  const [dsc, setDsc] = useState('');

  const handleNameChange = (value) => {
    if (value.length >= 20) { return; }
    setName(value);
  };

  const handleDscChange = (value) => {
    if (value.length >= 70) { return; }
    setDsc(value);
  };

  const handleAddAdvancementClick = () => {
    if (name === '') { return; }
    handleAddAdvancement(name, dsc, fieldName);
    setName('');
    setDsc('');
  };

  return (
    <div className="flex items-stretch divide-x mb-5">
      <input type="text" placeholder={`Enter ${fieldName}`} value={name} onChange={(e) => handleNameChange(e.target.value)} className="outline-none p-3 text-base sm:text-lg text-white bg-slate-700 flex-2" />
      <input type="text" placeholder="Enter Description" value={dsc} onChange={(e) => handleDscChange(e.target.value)} className="outline-none p-3 text-base sm:text-lg text-white bg-slate-700 flex-1" />
      <button onClick={() => handleAddAdvancementClick()} className="w-fit px-4 sm:px-6 py-2 sm:py-3 bg-slate-400 text-white font-medium text-base duration-300 hover:opacity-40">ADD</button>
    </div>
  );
}

function AddSubtractBtn({ type, handleAddPoints, handleSubtractPoints }) {
  const [points, setpoints] = useState('');

  const handlepointsChange = (value) => {
    const e = Number(value);
    if (isNaN(e)) { return; }
    setpoints(value);
  };

  const handleClickAddPoints = () => {
    if (points !== '') {
      handleAddPoints(type, points);
      setpoints('');
      return;
    }
    handleAddPoints(type, '1');
    setpoints('');
  };

  const handleClickSubtractPoints = () => {
    if (points !== '') {
      handleSubtractPoints(type, points);
      setpoints('');
      return;
    }
    handleSubtractPoints(type, '1');
    setpoints('');
  };

  return (
    <div className="p-2 flex-2  ">
      <input type="text" value={points} onChange={(e) => handlepointsChange(e.target.value)} placeholder="1" className="bg-slate-700 text-white p-2 max-w-[4ch]" />
      <i onClick={() => handleClickAddPoints()} className="fa-solid fa-plus pt-1 pl-2 cursor-pointer text-xl duration-200 hover:text-cyan-300" />
      <i onClick={() => handleClickSubtractPoints()} className="fa-solid fa-minus pt-1 pl-2 cursor-pointer text-xl duration-200 hover:text-cyan-300" />
    </div>
  );
}

function AutoSubtractBtn({ type, handleAutoSubtractPoints }) {
  return (
    <div className="p-2 flex-2  ">
      <i onClick={() => handleAutoSubtractPoints(type)} className="fa-solid fa-square-minus pt-1 pl-2 cursor-pointer text-xl duration-200 hover:text-cyan-300" />
    </div>
  );
}

function Advancements() {
  const {
    playerData, addAdvancement, deleteAdvancement, setProgressValue,
  } = useStateContext();

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
        <>
          <div className="flex items-stretch gap-2">
            <ProgressBar value={techProgress} maxValue={techMaxValue} />
            <AddSubtractBtn type="science" handleAddPoints={(type, value) => setProgressValue(type, value, 'add')} handleSubtractPoints={(type, value) => setProgressValue(type, value, 'subtract')} />
            <AutoSubtractBtn type="science" handleAutoSubtractPoints={(type) => setProgressValue(type, techMaxValue, 'subtract')} />
          </div>
          <AdvancmentInput fieldName="technology" handleAddAdvancement={(name, dsc, fieldName) => addAdvancement(name, dsc, fieldName)} />
          {technologies.length !== 0 ? technologies.map((technology, index) => (
            <AdvancmentField key={index} fieldName="technology" name={technology.name} dsc={technology.dsc} handleDeleteAdvancement={(name, fieldName) => deleteAdvancement(name, fieldName)} />
          )) : null}
        </>
      <h1 className="font-extrabold select-none text-2xl sm:text-4xl mb-2 mt-8">Beliefs</h1>
      <div className="flex items-stretch gap-2">
        <ProgressBar value={beliefProgress} maxValue={beliefMaxValue} />
        <AddSubtractBtn type="religion" handleAddPoints={(type, value) => setProgressValue(type, value, 'add')} handleSubtractPoints={(type, value) => setProgressValue(type, value, 'subtract')} />
        <AutoSubtractBtn type="religion" handleAutoSubtractPoints={(type) => setProgressValue(type, beliefMaxValue, 'subtract')} />
      </div>
      <AdvancmentInput fieldName="belief" handleAddAdvancement={(name, dsc, fieldName) => addAdvancement(name, dsc, fieldName)} />
      {beliefs.length !== 0 ? beliefs.map((technology, index) => (
        <AdvancmentField key={index} fieldName="belief" name={technology.name} dsc={technology.dsc} handleDeleteAdvancement={(name, fieldName) => deleteAdvancement(name, fieldName)} />
      )) : null}

      <h1 className="font-extrabold select-none text-2xl sm:text-4xl mb-2 mt-8">Civics</h1>
      <div className="flex items-stretch gap-2">
        <ProgressBar value={civicProgress} maxValue={civicMaxValue} />
        <AddSubtractBtn type="influence" handleAddPoints={(type, value) => setProgressValue(type, value, 'add')} handleSubtractPoints={(type, value) => setProgressValue(type, value, 'subtract')} />
        <AutoSubtractBtn type="influence" handleAutoSubtractPoints={(type) => setProgressValue(type, beliefMaxValue, 'subtract')} />
      </div>

      <AdvancmentInput fieldName="civic" handleAddAdvancement={(name, dsc, fieldName) => addAdvancement(name, dsc, fieldName)} />
      {civics.length !== 0 ? civics.map((technology, index) => (
        <AdvancmentField key={index} fieldName="civic" name={technology.name} dsc={technology.dsc} handleDeleteAdvancement={(name, fieldName) => deleteAdvancement(name, fieldName)} />
      )) : null}

    </>
  );
}

export default Advancements;
