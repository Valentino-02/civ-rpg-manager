import React from 'react';

export default function FixedSubtractBtn({ type, handleSubtract }) {
    return (
      <div className="p-2 flex-2  ">
        <i onClick={() => handleSubtract(type)} className="fa-solid fa-square-minus pt-1 pl-2 cursor-pointer text-xl duration-200 hover:text-cyan-300" />
      </div>
    );
  }