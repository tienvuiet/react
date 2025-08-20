import  { Component } from 'react'
type FropTypes = {
    content?:string;
    className?:string;
    id?:string;
    children?:React.ReactNode;
}
export default class Button extends Component<FropTypes> {
  render() {
    const { className, id, children}=this.props
    return (
      <div>
        <button id={id} className={className}>
            {children}</button>
      </div>
    )
  }
}
