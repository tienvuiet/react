import  { Component } from 'react'
type State={
    tienDo: string,
    hienThi: string,
}
export default class Es4 extends Component<object, State> {
    constructor(props:object){
        super(props)
        this.state={
            tienDo:"",
            hienThi:""
        }
    }
    handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        this.setState({hienThi:this.state.tienDo})
    }
    handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {value}=e.target
        this.setState({ 
            tienDo:value
        })
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>    
         <label htmlFor="">Tien do hoan thanh {this.state.hienThi} %</label>
         <input type="range" value={this.state.tienDo} onChange={this.handleChange} name='tien do'/>
         <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
