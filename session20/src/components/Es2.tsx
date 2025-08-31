import { useState, type FormEvent } from "react"

export default function Es2() {
    const [data, setData] = useState({name:"", email:""})
    const [submited, setSubmited] = useState<{name: string , email: string}|null>(null)
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        setData({...data, [name]:value})
    }
    const handleSubmit = (e: FormEvent)=>{
        e.preventDefault()
        setSubmited(data)
    }
    return (
        <>
        <div>
            <form action="" onSubmit={handleSubmit}>    
                <input type="text" name="name" placeholder="name" onChange={handleChange} />
                 <input type="text" name="email" placeholder="email" onChange={handleChange}/>
               <button type="submit">Gui</button>
            </form>
        </div>
        {   
            submited&&( 
                <div>   
                   <p>Name: {submited?.name}  </p>
                   <p>Email: {submited?.email}</p>
                </div>
            )
        }
        </>
        
    )
}
