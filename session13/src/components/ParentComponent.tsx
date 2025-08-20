import  { Component } from 'react'
import ChildrenComponent from './ChildrenComponent'

export default class ParentComponent extends Component {
  render() {
    const companyName: string ="Rikkei Education";
    const age: number = 5
    return (
      <>
        <h1>Parent Component</h1>
        <ChildrenComponent companyName={companyName} age={age} />
      </>
    )
  }
}
