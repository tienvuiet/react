import  { Component } from 'react'
import DetailPost, { type Post } from './DetailPost'
interface State  {
    // cho nay phai import của no moi duoc nhe
    posts: Post[];
}

export default class ListPost extends Component<object, State> {
    constructor(props: object){
        // de duoi dang object nhu nay nhe
        super(props)
        this.state = {
           posts : [    
            {   
                id: 1,
                title: "7 vien ngoc rong",
                content: "Hay va y nghia",
                author: "tien vu "
            },
            {   
                id: 2,
                title: "Vo han thanh",
                content: "Hay va y nghia",
                author: "Tanjiro "
            },
           ] 
        }
    }
  render() {
    return (
      <div>
        <h2>Danh sach bai viet</h2>
        {this.state.posts.map((item)=>( 
            <DetailPost key = {item.id} post={item}/>
        ))}
      </div>
    )
  }
}
