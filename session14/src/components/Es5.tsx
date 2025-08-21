import { Component } from 'react'
type Product = {
    productCode: number,
    productName: string,
    price: number,
    quantity: number
}
type InitialState  = {
    products :Product;
}
export default class Es5 extends Component<object,InitialState > {
   constructor(props: object) {
        super(props)
        this.state = {
            products: {
                productCode: 0,
                productName: "",
                price: 0,
                quantity:0 
            }
        }
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Gia tri khi nhap: `, this.state.products);
        this.setState({ 
            products:{
                productCode: 0,
                productName: "",
                price: 0,
                quantity:0 
            }
        })
    }
    handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.name);
        const {name, value} = e.target
        this.setState({ 
            products:{...this.state.products, [name]:value}
        })
        
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <h3>Them moi san pham</h3>
                    <label htmlFor="">Ma san pham</label>
                    <input type="number" name='productCode' onChange={this.handleChange} value={this.state.products.productCode}/><br />
                    <label htmlFor="">Ten san pham</label>
                    <input type="text" name='productName' onChange={this.handleChange} value={this.state.products.productName}/>
                    <br />
                    <label htmlFor="">Gia</label>
                    <input type="number" name='price'onChange={this.handleChange} value={this.state.products.price} />
                    <br />
                    <label htmlFor="">So luong</label>
                    <input type="number" name='quantity' onChange={this.handleChange} value={this.state.products.quantity}/>
                    <br />
                    <button>Dang ky</button>


                </form>
            </div>
        )
    }

}
