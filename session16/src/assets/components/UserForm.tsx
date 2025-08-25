import { Component, type ChangeEvent, type FormEvent } from 'react'
type State = {
  name: string,
  email: string,
  age: number,
  error: string
}
export default class UserForm extends Component<object, State> {
  constructor(props: object) {
    super(props)
    this.state = {
      name: "",
      email: "",
      age: 0,
      error: ""
    }
  }
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    this.setState({
      ...this.state,
      [name]: value
    })
  }
  handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const { email, age } = this.state
    if (!email.includes("@")) {
      this.setState({ error: ' 😓 email khong hop le' })
      return
    }
    if (age < 0) {
      this.setState({ error: `😀 tuoi khong duoc am` })
    }
  }
  handleReset = () => {
    this.setState({
      name: "",
      email: "",
      age: 0,
      error: ""
    })
  }
  render() {
    return (
      <div>
        <h2>Nhap thong tin nguoi dung</h2>
        <form action="" onSubmit={this.handleSubmit}>
          <input type="text" placeholder='Ho ten' value={this.state.name} onChange={this.handleChange} name='name' /><br />
          <input type="text" placeholder='Email' value={this.state.email} onChange={this.handleChange} name='email' /><br />
          <input type="text" placeholder='Tuoi' value={this.state.age} onChange={this.handleChange} name='age' /><br />
          <button type='submit' > Gui</button>
          <button type='reset' onClick={this.handleReset}>Xoa tat ca</button>
        </form>
        {this.state.error ? (
          <p style={{ color: "red" }}>{this.state.error}</p>
        ) : (
          (
            <div>
              <h3>Thông tin đã nhập:</h3>
              <p>Họ tên: {this.state.name}</p>
              <p>Email: {this.state.email}</p>
              <p>Tuổi: {this.state.age}</p>
            </div>
          )
        )}
      </div>
    )
  }
}
