import { Component } from 'react'
type PropTypes = {  
    slogan?:string
};
type StateTypes = {
    companyName?:string;
    age?: number;
}
export default class DemoState extends Component<PropTypes,StateTypes> {
    constructor(props: PropTypes) {
      super(props);
      //khai bao cac state
      this.state = {
        companyName: "rikkei education",
        age: 3
      }
    }
    render() {
        
        
        const handleChangeName = () =>{
            //cap nhat lai gai tri cua state
            this.setState({ 
                companyName: "rekkei shoft",
            })
        }

        const handleRandomAge = () =>{
            this.setState({ 
                age: Math.ceil(Math.random()*100)
            })
        }
        return (
            <div>
              <h2>Company Name: {this.state.companyName}</h2>
              <h2>Company Age: {this.state.age}</h2>
              <button onClick={handleChangeName}>Change Company Name</button>
              <button onClick={handleRandomAge}>Random age</button>
            </div>
        )
    }
}
