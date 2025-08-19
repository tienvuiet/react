import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import "../styles/style.css"

export default function AdminIndex() {
    return (
        <>
            <div className="headerr">
                <Header />
                <div  style={{ display: "flex" }}>
                    <Menu />
                   <div className="mainfooter" >
                     <Main />
                     <Footer />
                   </div>
                </div>
            </div>
        </>
    )
}
