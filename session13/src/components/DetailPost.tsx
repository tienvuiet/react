import { Component } from 'react'
export interface Post  {
    id: number;
    title: string;
    content: string; 
    author: string;
}
interface DetailProps  {
    post: Post;
}

export default class DetailPost extends Component<DetailProps> {
  render() {
    const {id, title, content, author} = this.props.post
    return (
      <div>
        <p>ID: {id}</p>
        <p>Title: {title}</p>
        <p>Content: {content}</p>
        <p>Author: {author}</p>
      </div>
    )
  }
}
