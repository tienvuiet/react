// import React from 'react'

export default function Ex5() {
  return (
    <div className="relative bg-violet-500 h-[300px]">
      <p>Relative parent</p>
      <div className="absolute bottom-0 left-0 bg-green-300"> 
      <p>Absolute child</p>
      </div>
    </div>
  )
}
