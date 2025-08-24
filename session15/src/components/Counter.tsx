import { Component } from 'react'
type State = {
  count : number
}
export default class Counter extends Component <object, State> {
  timeId ?: number
  constructor(props:object){
    super(props)
    this.state = {
      count: 0
    }
  }
  componentDidMount(): void {
      this.timeId = setInterval(()=>{
        this.setState((prevState)=>({ 
          count: prevState.count===10? 0: prevState.count +1
        }))
      },1000)
  }

  componentWillUnmount(): void {
      if(this.timeId){
        clearInterval(this.timeId)
      }
  }
  render() {
    return (
      <div>
       <h2> Count: {this.state.count}</h2>
      </div>
    )
  }
}

