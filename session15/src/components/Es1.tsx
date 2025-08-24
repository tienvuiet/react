import { Component } from 'react'
type State ={
    email: string
}
export default class Es1 extends Component<object, State> {
    constructor(props:object){
        super(props)
        this.state = {
            email:""
        }
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(`Email: `, this.state.email);
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {value} = e.target;
        this.setState({ 
            email:value,
        })
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>    
           <label htmlFor="">Email:</label><br />
           <input type="text" name='email' value={this.state.email} onChange={this.handleChange}/>
           <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
