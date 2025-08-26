// import React from 'react'

import { useRef } from "react"

export default function DemoUseRef() {
    const headingRef = useRef(null);
    const inputRef = useRef<HTMLInputElement>(null);
    console.log("Heading ref",headingRef.current);
    console.log(document.getElementById("input"));
    
  return (
    <div>
      <h1 ref={headingRef}>Heading 1</h1>
      <input type="text" ref={inputRef}/>
    </div>
  )
}
