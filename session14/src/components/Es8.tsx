import React, { Component } from 'react'
type LoginUser = {
    email: string,
    password: string,
}
type State = {
    user: LoginUser,
    message: string,
}
export default class Es8 extends Component <object, State> {
    constructor(props:object){
        super(props)
        this.state = {
            user:{
                email:"",
                password: "",
            },
            message:""
        }
    }
    handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}=e.target
        this.setState({user:{...this.state.user, [name]:value}})
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const {email, password}= this.state.user;
        if(!email||!password){
            this.setState({message:"email va mat khau khong duoc de trong"})
            return 
        }
        const users: LoginUser[] = JSON.parse(localStorage.getItem("users") || "[]");

const existed = users.find((u) => u.email === email && u.password === password);
        if(existed){
            this.setState({message:"Dang nhap thanh cong"})
        }else{
            this.setState({message: "Dang nhap that bai"})
        }
    }
  render() {
    const {email, password}=this.state.user
    const {message}= this.state
    return (
      <div>
        <h2>Dang nhap tai khoan</h2>
        <form action="" onSubmit={this.handleSubmit}>    
           <label htmlFor="">Email:</label><br />
           <input type="text" name="email" id="" value={email} onChange={this.handleChange} /><br />
           <label htmlFor="">Password:</label><br />
           <input type="text" name='password' value={password} onChange={this.handleChange} /><br />
           <button type='submit'>Dang nhap</button>
        </form>
        {message&&<p>{message}</p>}
      </div>
    )
  }
}
