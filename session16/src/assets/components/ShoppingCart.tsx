import { Component } from 'react'
import "../styles/styles.css"

type Product = {
  id: number
  name: string
  price: number
  image: string
  stock: number  
}

type CartItem = {
  product: Product
  quantity: number
}

type State = {
  products: Product[]
  cart: CartItem[]
  showCart: boolean
}

const LS_KEY = "shopping_cart"
export default class ShoppingCart extends Component<object, State> {
  constructor(props: object) {
    super(props)
    this.state = {
      products: [
        { id: 1, name: "Điện thoại Samsung Galaxy", price: 20000000, stock: 5, image: "https://cdn.tgdd.vn/Products/Images/42/329151/iphone-16-pro-max-titan-trang-thumbtgdd-600x600.png" },
        { id: 2, name: "Điện thoại Iphone14 Promax", price: 20500000, stock: 3, image: "https://tiki.vn/blog/wp-content/uploads/2024/09/iphone-16-sap-ra-mat-001.jpg" },
        { id: 3, name: "Điện thoại Samsung Galaxy", price: 21000000, stock: 8, image: "https://cdn.prod.website-files.com/680a070c3b99253410dd3df5/680a070c3b99253410dd47be_66e007f27ebc6f8e02699ef7_Apple%252016%2520thumbnail.png" },
        { id: 4, name: "Điện thoại Iphone11 Promax", price: 21500000, stock: 2, image: "https://i-sohoa.vnecdn.net/2024/09/10/DSCF0675-5805-1725922114.jpg" },
        { id: 5, name: "Điện thoại Samsung Galaxy", price: 22000000, stock: 7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5Z0MF7Cr5Z7zsn1jSUxK6SNP04xUn5cUWQ&s" },
        { id: 6, name: "Điện thoại Samsung Galaxy", price: 22000000, stock: 4, image: "https://www.duchuymobile.com/images/detailed/74/xiaomi-redmi-12-5g-slide-thiet-ke.jpg" },
        { id: 7, name: "Điện thoại Oppo A9", price: 23000000, stock: 6, image: "https://tintuc.dienthoaigiakho.vn/wp-content/uploads/2024/09/co-nen-mua-dien-thoai-xiaomi-khong-1.jpg" },
        { id: 8, name: "Điện thoại Oppo V5", price: 23500000, stock: 6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5vHrkZFHfxSsjO4gbg6eBajJvr22LK-UMg&s" },
      ],
      cart: [],
      showCart: false
    }
  }
  componentDidMount(): void {
    const raw = localStorage.getItem(LS_KEY)
    if (raw) {
      this.setState({ cart: JSON.parse(raw) })
    }
  }
  saveCart(cart: CartItem[]) {
    localStorage.setItem(LS_KEY, JSON.stringify(cart))
  }
  addToCart = (product: Product) => {
    this.setState(prev => {
      const exist = prev.cart.find(c => c.product.id === product.id)
      if (exist) {
        if (exist.quantity + 1 > product.stock) {
          alert("Số lượng sản phẩm trong kho không đủ")
          return null
        }
        const next = prev.cart.map(c =>
          c.product.id === product.id ? { ...c, quantity: c.quantity + 1 } : c
        )
        this.saveCart(next)
        return { cart: next }
      } else {
        const next = [...prev.cart, { product, quantity: 1 }]
        this.saveCart(next)
        return { cart: next }
      }
    })
  }
  removeFromCart = (id: number) => {
    this.setState(prev => {
      const next = prev.cart.filter(c => c.product.id !== id)
      this.saveCart(next)
      return { cart: next }
    })
  }
  updateQuantity = (id: number, type: "inc" | "dec") => {
    this.setState(prev => {
      const next = prev.cart.map(c => {
        if (c.product.id !== id) return c
        if (type === "inc") {
          if (c.quantity + 1 > c.product.stock) {
            alert("Số lượng sản phẩm trong kho không đủ")
            return c
          }
          return { ...c, quantity: c.quantity + 1 }
        } else {
          return { ...c, quantity: Math.max(1, c.quantity - 1) }
        }
      })
      this.saveCart(next)
      return { cart: next }
    })
  }
  toggleCart = () => {
    this.setState({ showCart: !this.state.showCart })
  }
  render() {
    const { products, cart, showCart } = this.state
    const total = cart.reduce((sum, c) => sum + c.product.price * c.quantity, 0)
    return (
      <div className="container">
        <div className="navbar">
          <span>Trang chủ</span>
          <span>Danh sách sản phẩm</span>
          <div className="cart-icon" onClick={this.toggleCart}>
            🛒 <span className="badge">{cart.length}</span>
          </div>
        </div>
        <div className="product-list">
          {products.map(p => (
            <div key={p.id} className="product-card">
              <img src={p.image} alt={p.name} />
              <h4>{p.name}</h4>
              <p>{p.price.toLocaleString()} ₫</p>
              <p>Kho: {p.stock}</p>
              <button onClick={() => this.addToCart(p)}>🛒 Thêm vào giỏ hàng</button>
            </div>
          ))}
        </div>
        {showCart && (
          <div className="cart">
            <h3>Cart</h3>
            {cart.map(c => (
              <div key={c.product.id} className="cart-item">
                <img src={c.product.image} alt={c.product.name} />
                <span>{c.product.name}</span>
                <div className="quantity">
                  <button onClick={() => this.updateQuantity(c.product.id, "dec")}>-</button>
                  <span>{c.quantity}</span>
                  <button onClick={() => this.updateQuantity(c.product.id, "inc")}>+</button>
                </div>
                <button className="remove" onClick={() => this.removeFromCart(c.product.id)}>🗑</button>
              </div>
            ))}
            <div className="total">Tổng tiền: {total.toLocaleString()} ₫</div>
          </div>
        )}
      </div>
    )
  }
}
