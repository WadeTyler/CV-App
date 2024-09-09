import React from 'react'
import { LabelSection } from './LabelSection'

export const ContactInfo = ({editMode}) => {
  return (
    <div className='flex flex-col border-b-slate-700 border-b-2 mb-5'>

        <LabelSection label="EMAIL" value="johndoe@gmail.com" editMode={editMode} />
        <LabelSection label="CONTACT NUMBER" value="+1 (123) 456-7890" editMode={editMode} />
        
    </div>
  )
}
