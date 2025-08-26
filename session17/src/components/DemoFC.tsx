// import { useState } from "react"
// // type User = {
// //     email: string,
// //     password: string,
// //     address: string,
// //     dateOfBirth: string
// // }
// export default function DemoFC() {
//     // const [email, setEmail] = useState<string>("nabd@gmail.com")
//     // const [user, setUser] = useState<User | null>({
//     //     email: "nva@gmail.com",
//     //     password: "1231ad",
//     //     address: "ha noi"

//     // })
//     const [count, setCount] = useState(0)
//     //khong duoc gan lai gia tri cua state
//     //cap nhat gia tri cua State
//     console.log();

//     const handleIncreate = () => {
//         setCount((prev) => prev + 1)//prev = 0
//         setCount((prev) => prev + 2)//prev = 1
//         setCount((prev) => prev + 3)//prev = 3
//         setCount((prev) => prev + 4)//prev = 6
//     }
//     const handleUpdateInfo = () => {
//         setUser({
//             ...user,
//             dateOfBirth:"23-233-12"
//         })
//     }
//     return (
//         <div>
//             <h2>{email}</h2>
//             <h2>Count: {count}</h2>
//             <h2>User info: {JSON.stringify(user)}</h2>
//             <button onClick={handleIncreate}>Increate</button>
//             <button onClick={handleUpdateInfo}> Update Info</button>
//         </div>
//     )
// }
