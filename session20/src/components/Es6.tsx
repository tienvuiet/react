import  { useEffect, useRef, useState } from 'react'

export default function Es6() {
    const [isOpen, setIsopen] = useState(false)
    const inputRef = useRef<HTMLInputElement|null>(null)
   useEffect(()=>{
     inputRef.current?.focus();
     console.log("use effect");
     return 
   })
  return (
     
    <div>
        
        
        <button onClick={()=>setIsopen(true)}>Mo</button>
        {isOpen?<div>
            <input ref={inputRef} type="text" name="" id="" />
            <button onClick={()=>setIsopen(false)}>dong</button>
        </div>:""}

    </div>
  )
}
