// // import { useEffect, useRef, useState } from "react"


// export default function DemoUseEffect() {
//     const [count, setCount] = useState<number>(0)
//     // const [title, setTitle] = useState<string>("")
//     //truong hop 1
//     // useEffect(() => {
//     //     console.log("Callback duoc goi");
//     //     document.title = title
//     // })
//     // truong hop 2: hay duoc su dung goi API lay du lieu
//     useEffect(()=>{ 
//        console.log("callback duoc goi truong hop 2");
       
//     }, [])
//     //truong hop 3
//     useEffect(()=>{ 
//        console.log(`callback dc goi th thu 3`);
       
//     }, [count])
//     return (

//         <>
//            { console.log(`component mounte`)}
//            <h1>Count : {count}</h1>
//            <button onClick={()=>setCount(count+1)}>Count</button>
//            {/* <input type="text" onChange={(e)=>setTitle(e.target.value)}/> */}
//         </>
//     )
// }
