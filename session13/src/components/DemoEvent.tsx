import { Component } from 'react'

export default class DemoEvent extends Component {
  render() {
    const handleClick = (id:number)=>{
        console.log(`Button clicked`, id);
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(`Change event`, event.target.value);
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) =>{
        //ngan chan hanh vi mac dinh cua formt
        event.preventDefault()
        console.log(`submitted`, );
        
    }
    return (
      <div>
        {/* phai truyen arrow function */}
        <button onClick={()=>handleClick(12)}>Click me</button>
        <input type="text" onChange={handleChange}/>
        <form action="" onSubmit={handleSubmit}>    
            <input type="text" />
            <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}
