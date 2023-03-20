import React, { useState } from 'react';

export default function AddSubtractBtn ({ handleAdd, handleSubtract }) {
    const [virtualPoints, setVirtualPoints] = useState('');
  
    const handlepointsChange = (value) => {
      const e = Number(value);
      if (isNaN(e)) { return; }
      setVirtualPoints(value);
    };
  
    const handleClickAddBtn= () => {
      if (virtualPoints!== '') {
        handleAdd(Number(virtualPoints));
        setVirtualPoints('');
        return;
      }
      handleAdd(1);
    };
  
    const handleClickSubtractBtn= () => {
      if (virtualPoints!== '') {
        handleSubtract(Number(virtualPoints));
        setVirtualPoints('');
        return;
      }
      handleSubtract(1);
    };
  
    return (
      <div className="p-2 flex-2 ">
        <input type="text" value={virtualPoints} onChange={(e) => handlepointsChange(e.target.value)} placeholder="1" className="bg-slate-700 text-white p-2 max-w-[4ch] rounded-md" />
        <i onClick={() => handleClickSubtractBtn()} className="pt-1 pl-2 text-xl duration-200 cursor-pointer fa-solid fa-minus hover:text-cyan-300" />
        <i onClick={() => handleClickAddBtn()} className="pt-1 pl-2 text-xl duration-200 cursor-pointer fa-solid fa-plus hover:text-cyan-300" />
      </div>
    );
}