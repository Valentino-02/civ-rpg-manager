import React from 'react'

const CenterChildrenDiv = ({ children }) => {
  return (
    <>
      {children.map((elements, index) => (
        <div key={index} className="mb-2 mx-2 md:mx-20 lg:mx-20 xl:mx-20 sm:gap-4 flex flex-col gap-2">
          {elements}
        </div>
      ))}
    </>
  );
}

export default CenterChildrenDiv