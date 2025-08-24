import { Component } from 'react'
type Props = {
    onAdd: (name: string) => void
}
type State = {
    input: string
}
export default class TodoForm extends Component<Props, State> {
    constructor(props: Props){
        super(props)
        this.state = {
            input: ""
        }
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({input: e.target.value})
    }
    handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault();
        this.props.onAdd(this.state.input);
        this.setState({input: ""})
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>    
          <input type="text"    
          onChange={this.handleChange} 
          placeholder='them cong viec'
          value={this.state.input}/>
          <button type='submit'>Them</button>
        </form>
      </div>
    )
  }
}
