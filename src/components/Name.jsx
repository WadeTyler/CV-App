import React from 'react'

export const Name = ({editMode}) => {
  return (
    <h1 contentEditable={editMode}
     className={`text-slate-600 text-4xl pb-2 border-b-2 border-slate-600 w-fit focus:outline-none ${editMode ? 'border-[1px] border-slate-600' : ''}`}>JOHN DOE</h1>
  )
}
