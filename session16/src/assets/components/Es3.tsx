import { Component } from 'react'
import "../styles/styles.css"
import Button from './Button'

export default class Es3 extends Component {
    render() {
        return (
            <div>
                <Button type='primary' label='primary' />
                <Button type='secondary' label='secondary' />
                <Button type='success' label='success' />
            </div>
        )
    }
}
