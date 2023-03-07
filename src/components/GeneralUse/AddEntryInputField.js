import React, { useState } from 'react'

const AddEntryInputField = ({ type, handleAddEntry, label='' }) => {
    const [entryName, setEntryName] = useState('');
    const [entryDsc, setEntryDsc] = useState('');

    const renderedLabel = label === '' ? type : label
  
    const handleNameChange = (value) => {
      if (value.length >= 20) { return; }
      setEntryName(value);
    };
  
    const handleDscChange = (value) => {
      if (value.length >= 70) { return; }
      setEntryDsc(value);
    };
  
    const handleClickAddBtn = () => {
      if (entryName=== '') { return; }
      handleAddEntry(entryName, entryDsc, type);
      setEntryName('');
      setEntryDsc('');
    };
  
    return (
      <div className="flex items-stretch mb-5 divide-x">
        <input type="text" placeholder={`Enter ${renderedLabel}`} value={entryName} onChange={(e) => handleNameChange(e.target.value)} className="p-3 text-base text-white outline-none sm:text-lg bg-slate-700 flex-2" />
        <input type="text" placeholder="Enter Description" value={entryDsc} onChange={(e) => handleDscChange(e.target.value)} className="flex-1 p-3 text-base text-white outline-none sm:text-lg bg-slate-700" />
        <button onClick={() => handleClickAddBtn()} className="px-4 py-2 text-base font-medium text-white duration-300 w-fit sm:px-6 sm:py-3 bg-slate-400 hover:opacity-40">ADD</button>
      </div>
    );
}

export default AddEntryInputField