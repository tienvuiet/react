import { Component } from 'react'
type PropTypes = {
    companyName?:string,
    age?:number;
    position?:string;
}
export default class GrandChildrenComponent extends Component<PropTypes> {
  render() {
    //destructoring props
    const {companyName, age, position}= this.props
    return (
      <div>
        grand children component
        <h3>CompanyName: {companyName}</h3>
        <h3>Age: {age}</h3>
        <h3>Position: {position}</h3>
      </div>
    )
  }
}
