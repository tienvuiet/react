import { Component } from 'react'
type State = {
    color: string
}
export default class Es2 extends Component<object, State> {
    constructor(props: object) {
        super(props)
        this.state = {
            color: ""
        }
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(`Color: `, this.state.color);
        

    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        this.setState  ({
            color: value
        })
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <h3>Color: {this.state.color}</h3>
                    <label htmlFor="">Mau sac</label>
                    <input type="color" value={this.state.color} onChange={this.handleChange} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
