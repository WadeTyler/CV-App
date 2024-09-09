import React from 'react'

export const RightImage = ({editMode}) => {
  return (
    <div className="h-full w-1/3 relative flex items-center justify-center">
        <img src="leaves.jpg" alt="" className="w-full h-full absolute" />
        
        <section className="bg-black bg-opacity-50 w-full z-10 relative p-4">
            <h1 contentEditable={editMode}
            className={`text-white text-4xl px-10 text-center w-fit focus:outline-none ${editMode ? 'border-[1px] border-slate-600' : ''}`}>"What would you do if you weren't afraid?"</h1>
        </section>

    </div>
  )
}
