import React from 'react'

export const ToggleButton = ({editMode, setEditMode}) => {

    const toggleMode = () => {
        if (editMode) {
            setEditMode(false);
        }
        else {
            setEditMode(true);
        }
        console.log(editMode);
    }

  return (
    <button 
    onClick={toggleMode}
    className={`px-4 py-1 ${editMode ? 'bg-green-600 hover:bg-green-400' : 'bg-slate-600 hover:bg-slate-400'} text-white border-none shadow-md shadow-black rounded-3xl outline-none
     hover:scale-110 transition-all duration-300 ease-in-out`}>
        {editMode ? "Edit Mode" : "View Mode"}
    </button>
  )
}
