import React from 'react'

const AddedEntry = ({ name, dsc, type, handleDeleteEntry }) => {
    return (
        <div className="flex items-stretch divide-x border border-white border-solid">
            <input disabled type="text" placeholder={name} value={name} onChange={(e) => {}} className="outline-none p-3 text-base sm:text-lg text-white bg-teal-700 flex-auto w-4/5" />
            <input disabled type="text" placeholder={dsc} value={dsc} onChange={(e) => {}} className="outline-none p-3 text-base sm:text-lg text-white bg-teal-700 flex-auto w-1/5" />
            <button onClick={() => handleDeleteEntry(name, type)} className="w-fit px-4 sm:px-6 py-2 sm:py-3 bg-teal-500 text-white font-medium text-base duration-300 hover:opacity-40">DEL</button>
        </div>
    );
}

export default AddedEntry