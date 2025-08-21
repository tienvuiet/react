import { Component, createRef } from 'react'
type User ={
    name: string,
    email: string, 
    password: string, 
    phoneNumber: string,
    
}
type State = {
    user: User,
    message : string,
}
export default class Es7 extends Component<object, State> {
    nameInputRef = createRef<HTMLInputElement>();
    constructor(props:object){
        super(props)
        this.state = {
            user:{
                name:"",
                email: "",
                password: "",
                phoneNumber: ""
            },
            message:"",
        }
    }
    handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}=e.target
        this.setState({ 
            user:{...this.state.user, [name]:value}
        })
    }
    handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const {name, email, password, phoneNumber}=this.state.user
        if(!name||!email||!password){
            this.setState({message:"Ten, email khong duoc de trong"});
            return
        }
        const users = JSON.parse(localStorage.getItem("users")||"[]");

        const existed = users.find((u:User)=>u.email===email);
        if(existed){
            this.setState({message:"Email da ton tai"})
            return 
        }

        users.push({name, email, password, phoneNumber})
        localStorage.setItem("users", JSON.stringify(users));

        this.setState({ 
            user:{name:"", email:"", password:"", phoneNumber:""},
            message:"dang ky thanh cong"
        })
        if(this.nameInputRef.current){
            this.nameInputRef.current?.focus();
        }
    }
  render() {
    return (
      <div>
        <h2>Dang ki tai khoan</h2>
        <form action="" onSubmit={this.handleSubmit}>    
               <label htmlFor="">Ten sinh vien</label><br />
               <input type="text" ref={this.nameInputRef} name='name' value={this.state.user.name} onChange={this.handleChange}/><br />
               <label htmlFor="">Email</label><br />
               <input type="text" name='email' value={this.state.user.email} onChange={this.handleChange}/><br />
               <label htmlFor="">Mat khau: </label><br />
               <input type="text" name="password" value={this.state.user.password} onChange={this.handleChange}/><br />
               <label htmlFor="">So dien thoai:</label><br />
               <input type="text" name="phoneNumber"  value={this.state.user.phoneNumber} onChange={this.handleChange}/><br />
               <button type='submit'>Dang ky</button>
               {this.state.message&&( <p>{this.state.message}</p> )}
        </form>
      </div>
    )
  }
}
