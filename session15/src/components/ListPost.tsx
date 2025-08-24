import { Component } from 'react'
import DetailPost ,{type Post } from './DetailPost'
type State = {
    posts: Post[]
}
export default class ListPost extends Component<object, State> {
    constructor(props:object){
        super(props)
        this.state={
            posts:[ 
                {
                    id:1,
                    title:"7 vien ngoc rong",
                    content:"Hay va y nghia",
                    author: "Vu viet tien"
                },
                {
                    id: 2,
                    title: "tro choi con muc",
                    content: "oi doi oi trinh la gi ma trinh ai cham",
                    author: "Tien vu Viet"
                }
            ]
        }
    }
  render() {
    return (
      <div>
        <h2>Danh sach bai viet</h2>
        {this.state.posts.map((item=>(  
            <DetailPost key={item.id} post={item}/>
        )))}
      </div>
    )
  }
}
