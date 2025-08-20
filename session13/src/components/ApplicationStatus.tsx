import { Component } from 'react'
type State = {
    theme: 'light' | 'dark',
    language: 'english' | 'vietnamese'
}
export default class ApplicationStatus extends Component<object, State> {
    constructor(props: object) {
        super(props)
        this.state = {
            theme: 'dark',
            language: "vietnamese"
        }

    }
    render() {
        const { theme, language } = this.state
        const style = {
            backgroundColor: theme === 'light' ? 'white' : 'black',
            color: theme === 'light' ? 'black' : 'white',
        }
        const textTheme = language === "vietnamese" ? theme === "light" ? "sang" : "toi" :theme ==="light" ?"light":"dark"
        const textLanguge = language ==="vietnamese"?"tieng viet":"English"

        return (
            <div style = {style}>
             <p>Nen: {textTheme}</p>
             <p>Ngon ngu: {textLanguge}</p>
            </div>
        )
    }
}
