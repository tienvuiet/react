import React, { Component } from 'react'

export default class Calculation extends Component {
  render() {
    const sum = (fistNumber: number, secondNumber: number):number=>{
        return fistNumber+secondNumber
    }
    const tru = (fistNumber: number, secondNumber: number):number=>{
        return fistNumber-secondNumber
    }
    const nhan = (fistNumber: number, secondNumber: number):number =>{
        return fistNumber *secondNumber
    }
    const chia = (fistNumber: number, secondNumber: number):number =>{
        return fistNumber/ secondNumber
    }
    return (
      <React.Fragment>
        <h1>Danh sach ket qua</h1>
        <ul>
            <li>10 + 10 = {sum(10, 10)}</li>
            <li>10 - 10 = {tru(10,10)}</li>
            <li>10 * 10 = {nhan(10,10)}</li>
            <li>10 / 10 = {chia(10, 10)}</li>
        </ul>
      </React.Fragment>
    )
  }
}
