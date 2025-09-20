
import './App.css'
import ListProduct from './components/ListProduct'
import ShoppingCart from './components/ShoppingCart'

function App() {


  return (
    <>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="./css/style.css" />
        <link rel="stylesheet" href="./css/bootstrap.min.css" />
        <div className="container">
          <div className="page-header">
            <h1>Shopping Cart</h1>
          </div>
          <div className="row">
            {/* list product */}
            <ListProduct/>
            {/* gio hang */}
            <ShoppingCart/>            
          </div>
        </div>
      </>

    </>
  )
}

export default App
