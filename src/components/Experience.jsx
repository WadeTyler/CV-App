import React from 'react'
import { LabelSection } from './LabelSection'

export const Experience = ({editMode}) => {
  return (
    <div className='flex flex-col mb-5'>
        <h1 className="text-slate-600 text-4xl">Experience</h1>

        <div className="grid grid-cols-2">
            <LabelSection label="POSITION" value="Senior Software Engineer" editMode={editMode} />
            <LabelSection label="COMPANY" value="FakeTech Inc." editMode={editMode} />
            <LabelSection label="STARTING YEAR" value="2021" editMode={editMode} />
            <LabelSection label="ENDING YEAR" value="Present" editMode={editMode} />
        </div>

    </div>
  )
}
