import { Component } from 'react'
import "../styles/styles.css"

type State = {
    isDarkMode: boolean
}

export default class ThemeSwitcher extends Component<object, State> {
    constructor(props: object) {
        super(props)
        this.state = {
            isDarkMode: false
        }
    }

    handleChangeTheme = () => {
        this.setState(prevState => ({
            isDarkMode: !prevState.isDarkMode
        }))
    }

   
    render() {
        return (
            <div className={this.state.isDarkMode ? "dark-theme" : "light-theme"}>
                {this.state.isDarkMode
                    ? <p>Chế độ Tối đang bật </p>
                    : <p>Chế độ Sáng đang bật </p>}
                <button onClick={this.handleChangeTheme}>Chuyển Theme</button>
            </div>
        )
    }
}
