import React from 'react'

const AddedEntry = ({ name, dsc, handleDeleteEntry }) => {
    return (
        <div className="flex items-stretch border border-white border-solid divide-x">
            <input disabled type="text" placeholder={name} value={name} onChange={(e) => {}} className="flex-auto w-4/5 p-3 text-base text-white bg-teal-700 outline-none sm:text-lg" />
            <input disabled type="text" placeholder={dsc} value={dsc} onChange={(e) => {}} className="flex-auto w-1/5 p-3 text-base text-white bg-teal-700 outline-none sm:text-lg" />
            <button onClick={handleDeleteEntry} className="px-4 py-2 text-base font-medium text-white duration-300 bg-teal-500 w-fit sm:px-6 sm:py-3 hover:opacity-40">DEL</button>
        </div>
    );
}

export default AddedEntry