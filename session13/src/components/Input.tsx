import { Component } from 'react'
type State = {
    value: string
}
export default class Input extends Component<object, State> {
    constructor(props: object){
        super(props)
        this.state = {
            value: ""
        }
    }
    render() {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            // event.preventDefault()
             this.setState({value: event.target.value}) 
            
        }
        return (
            <div>
                <h3>Du lieu: {this.state.value}</h3>
                <input type="text" onChange={handleChange}/>
            </div>
        )
    }
}
