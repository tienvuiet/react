import { Component } from 'react'

export default class Exercise02 extends Component {
    StateTypes = {
        id: 1,
        name: "Vu viet tien",
        dateOfBirth: "19/01/2006",
        address: "201 Yen Xa"
    }
    render() {
        return (
            <div>
            <h1>Thong tin ca nhan</h1>
            <h4>id : {this.StateTypes.id}</h4>
            <h4>name: {this.StateTypes.name}</h4>
            <h4>dateOfBirth: {this.StateTypes.dateOfBirth}</h4>
            <h4>address: {this.StateTypes.address}</h4>
            </div>
        )
    }
}
