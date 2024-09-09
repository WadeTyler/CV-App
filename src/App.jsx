import { Resume } from "./components/Resume"
import { RightImage } from "./components/RightImage"
import { useState } from "react"

export default function App() {

  const [editMode, setEditMode] = useState(false);

  return (
    <div className="w-full h-screen flex">
      <Resume editMode={editMode} setEditMode={setEditMode} />
      <RightImage editMode={editMode}/>
    </div>
  )
}