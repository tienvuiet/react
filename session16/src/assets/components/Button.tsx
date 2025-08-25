import  { Component } from 'react'
type Prop = {
    label: string,
    type : string,
}
export default class Button extends Component<Prop> {
  render() {
    const {label, type} = this.props
    return (
      <button style={{background:type==="primary"?  
        "blue"  
        : type==="secondary"?
        "red"
        : type==="success"?
        "green":
        "while" 
        }}>{label}</button>
    )
  }
}
