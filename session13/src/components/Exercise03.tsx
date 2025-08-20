import { Component } from 'react'
import "../styles/style.css"
type User = {
    id: number,
    name: string,
    address: string
}
type StateTypes = {
    users: User[]
}
export default class Exercise03 extends Component<object, StateTypes> {
    constructor(props: object) {
        super(props);
        this.state = {
            users: [
                { id: 1, name: "Vu vie tien", address: "khoi 8" },
                { id: 2, name: "tien", address: "asdfasdf" },
                { id: 3, name: "vie tien", address: "8asdf" },
            ]
        }
    }
    render() {
        return (
            <div>
                <table className='exercidse03'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>adress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
