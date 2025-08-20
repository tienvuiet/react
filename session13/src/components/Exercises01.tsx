import { Component } from 'react'
// type StateTypes = {
//     name?:string;
// }
export default class Exercises01 extends Component {
    StateTypes = {
        name: "vu viet tien"
    }
    render() {
        return (
            <div>
                <h1>Ho va ten: {this.StateTypes.name}</h1>
            </div>
        )
    }
}
