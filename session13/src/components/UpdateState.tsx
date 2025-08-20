import  { Component } from 'react'
type State = {
    companyName: string
}
export default class UpdateState extends Component<object, State> {
    constructor(props: object){
        super(props)
        this.state = {
            companyName: "Rikkei Acadamy"
        }
    }
  render() {
    const handleChangeName = () =>{
        this.setState({ 
            companyName: "Rikkei soft"
        })
    }
    return (
      <div>
        <h3>Ten cong ty {this.state.companyName}</h3>
        <button onClick={handleChangeName}>Change</button>
      </div>
    )
  }
}
