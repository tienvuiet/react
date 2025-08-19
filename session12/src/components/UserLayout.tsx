import Header from "./Header"
import Menu from "./Menu"
import Cart from "./Cart"
import Article from "./Article"
import Navbar from "./Navbar"
export default function UserLayout() {
    return (
        <>
            <div >
                <Header />
                <Navbar />
            </div>
            <div className="layoutTotal">
                <Menu />
                <div className="layoutTotal2">
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />

                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                </div>
                <Article />
            </div>
        </>
    )
}
