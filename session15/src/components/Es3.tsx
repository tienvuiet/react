import  { Component } from 'react'
type State = {
    date: string;
    hienThi: string,
}
export default class Es3 extends Component <object, State>{
  constructor(props:object){
    super(props)
    this.state={
      date:"",
      hienThi: ""
      }
  }
  handleSubmit = (e: React.FocusEvent<HTMLFormElement>)=>{
    e.preventDefault()
    this.setState({hienThi:this.state.date})
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const {value}=e.target
    this.setState({
      date: value,
      
    })
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>  
          <label htmlFor="">Ngay sinh: {this.state.hienThi}</label><br />
          <input type="date" name='date' value={this.state.date} onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
