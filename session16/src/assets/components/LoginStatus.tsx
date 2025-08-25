import { Component } from 'react'
type State = {
    isLoggedIn: boolean
}
export default class LoginStatus extends Component<object, State> {
    constructor(props: object) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }
    handleStage = () => {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn,
        })
        )
    }
    
    render() {
        const {isLoggedIn} = this.state
        return (
            <div >
              {(isLoggedIn)? (<h2>Vui long dang nhap de tiep tuc</h2>):(<h2>Xin chao, User</h2>)}
              <button onClick={this.handleStage}>  
                {isLoggedIn? `Dang nhap`: `Dang xuat`}
              </button>
            </div>
        )
    }
}
