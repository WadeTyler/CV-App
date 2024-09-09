import React from 'react'
import { Name } from './Name'
import { ContactInfo } from './ContactInfo'
import { Education } from './Education'
import { Experience } from './Experience'
import { ToggleButton } from './ToggleButton'

export const Resume = ({editMode, setEditMode}) => {
  return (
    <div className='w-2/3 bg-gray-300 p-9 h-full relative flex flex-col'>
        
        <Name editMode={editMode} />
        <ContactInfo editMode={editMode} />
        <Education editMode={editMode} />
        <Experience editMode={editMode}/>

        <div className="absolute top-0 right-0 mr-9 mt-9">
          <ToggleButton editMode={editMode} setEditMode={setEditMode} />
        </div>
        


    </div>
  )
}
