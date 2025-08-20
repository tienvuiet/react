import { Component } from 'react'
import GrandChildrenComponent from './GrandChildrenComponent'
type PropTypes = {
    companyName: string;
    age?: number
}
export default class ChildrenComponent extends Component<PropTypes> {
    static defaultProps ={
        companyName:"Rikkei soft",
        age:3
    }
        
    
  render() {
    console.log(`CompanyName: `, this.props.companyName);
    console.log(`Age: `, this.props.age);
    //destructarinf props
    const {companyName, age} = this.props
    const position: string ="intern"
    return (
      <div>
        <h1>Children Component</h1>
        <h1>CompanyName: {companyName}</h1>
        <h1>Age: {age}</h1>
        <GrandChildrenComponent companyName={companyName}  age={age} position={position}/>
      </div>
    )
  }
}
