import React from 'react'

export const LabelSection = ({label, value, editMode, setEditMode}) => {
  return (
    <div className='flex flex-col my-2'>
        <h2 className="text-slate-400 text-2xl tracking-widest">{label}</h2>
        <p contentEditable={editMode}
        className={`w-fit text-slate-600 text-lg focus:outline-none ${editMode ? 'border-[1px] border-slate-600' : ''}`}>
            {value}
        </p>
    </div>
  )
}
