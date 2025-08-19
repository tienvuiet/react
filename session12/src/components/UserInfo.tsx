import React, { Component } from 'react'

export default class UserInfo extends Component {
  render() {
    const used ={
        name: " Vu viet tien",
        sex: "nam",
        date: "06/03/2004",
        email: "asdf@gmail.com",
        diaChi: "Ninh Binh"
    }
    return (
      <React.Fragment>
        <h1>Thong tin ca nhan</h1>
        <ul>
            <li>Ho va ten : {used.name}</li>
            <li>Gioi tinh: {used.sex}</li>
            <li>Ngay sinh: {used.date}</li>
            <li>Email: {used.email}</li>
            <li>Dia chi: {used.diaChi}</li>
        </ul>
      </React.Fragment>
    )
  }
}
