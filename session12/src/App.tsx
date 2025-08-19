

import './App.css'
import TabNavs from './components/TabNavs'
import TabsContent from './components/TabsContent'
// import UserLayout from './components/UserLayout'
// import AdminIndex from './components/AdminIndex'
// import ColorBox from './components/ColorBox'
// import FormatName from './components/FormatName'

// import UserInfo from './components/UserInfo'
// import Calculation from './components/Calculation'
// import ListCourse from './components/ListCourse'

function App() {


  return (
    <>
      {/* bai1 */}
      {/* <ListCourse/> */}
      {/* bai2 */}
      {/* <Calculation/> */}
      {/* bai3 */}
      {/* <UserInfo/> */}
      {/* bai 4 */}
      {/* <ColorBox/> */}
      {/* bai 5 */}
      {/* <FormatName/> */}
      {/* bai 6 */}
      {/* <AdminIndex/> */}
      {/* bai 7 */}
      {/* <UserLayout/> */}
      {/* bai 9 */}
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div
            className="row d-flex justify-content-center align-items-center
              h-100"
          >
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <h3 style={{ textAlign: "center", marginBottom: 40 }}>
                    Quản lý công việc
                  </h3>
                  {/* Tabs navs */}
                  <TabNavs/>
                  {/* Tabs navs */}
                  {/* Tabs content */}
                  <TabsContent/>
                  {/* Tabs content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default App
