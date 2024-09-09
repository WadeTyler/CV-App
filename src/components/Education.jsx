import React from 'react'
import { LabelSection } from './LabelSection'

export const Education = ({editMode}) => {
  return (
    <div className='flex flex-col border-b-slate-700 border-b-2 mb-5'>
        <h1 className="text-slate-600 text-4xl">Education</h1>

        <div className="grid grid-cols-2">

            <LabelSection label="SCHOOL NAME" value="University of Texas" editMode={editMode} />
            <LabelSection label="Year" value="2020" editMode={editMode} />
            <LabelSection label="DEGREE" value="Bachelors in Computer Science" editMode={editMode} />

        </div>


    </div>
  )
}
