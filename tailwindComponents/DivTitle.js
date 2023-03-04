import React from 'react';

function DivTitle({ children }) {
  return (
    <div className="my-10 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
      {children}
    </div>
  );
}

export default DivTitle;
