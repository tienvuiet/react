import  { Component } from 'react'

type Product = {
    id: number,
    productName: string,
    price: number,
    quantity: number,
}
type Props = {
    product: Product;
} 
export default class Children_Comp extends Component<Props> {
  render() {
    const {id, productName, price, quantity}=this.props.product
    return (
      <div>
        <h2>Du lieu component con</h2>
        <p>Id: {id}</p>
        <p>ProductName: {productName}</p>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    )
  }
}
