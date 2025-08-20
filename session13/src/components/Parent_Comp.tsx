import  { Component } from 'react'
import Children_Comp from './Children_Comp'
type Product = {
    id: number,
    productName: string,
    price: number,
    quantity: number,
}
export default class Parent_Comp extends Component<object, Product> {
    constructor(props: object){
        super(props)
        this.state = {
        id: 1,
        productName: "Vu Viet Tien",
        price: 12,
        quantity: 3
    }
    }
    render() {
    return (
      <div>
        <Children_Comp product={this.state}/>
      </div>
    )
  }
}
