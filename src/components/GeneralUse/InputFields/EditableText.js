import React, { useState } from 'react'

const EditableText = ({value, handleChange}) => {
  const [isEditing, setIsEditing] = useState(false)
  
  return (
    <div>
      <input 
        readOnly={!isEditing}
        size={value.length}
        onBlur={() => setIsEditing(false)}
        value={value}
        onChange={(e) => handleChange(e.target.value)} 
        className={"text-white text-center border-b-2 outline-none pr-0 sm:text-lg bg-slate-900 mr-2 trasition-border-b duration-300 ease-in-out " + (isEditing ? 
          "border-cyan-400 text-opacity-60" :
          "border-slate-900 cursor-default")
        } 
      />
      <i 
        onClick={() => setIsEditing((prevState) => !prevState)} 
        className={"pt-1 pl-2 text-xl duration-300 cursor-pointer fa-solid fa-pen hover:opacity-60 " + (isEditing ? "text-cyan-300" : "")}
      />
    </div>
  )
}

export default EditableText