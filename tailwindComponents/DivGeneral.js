import React from 'react';

function DivGeneral({ children }) {
  return (
    <>
      {
    children.map((elements, index) => (
      <div key={index} className="mx-5 md:mx-20 lg:mx-30 xl:mx-40 sm:gap-4 mt-20 flex flex-col gap-2">
        {elements}
      </div>
    ))
  }
    </>
  );
}

export default DivGeneral;
