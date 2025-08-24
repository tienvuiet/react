import { Component } from 'react'
export type Post = {
    id: number,
    title: string,
    content: string,
    author: string,
}
type Props = {
    post: Post
}
export default class DetailPost extends Component<Props> {
    render() {
        const { id, title, content, author } = this.props.post
        return (
            <div>
                <p>Id: {id}</p>
                <p>Title: {title}</p>
                <p>Content: {content}</p>
                <p>author: {author}</p>
                <p>--------------------------------------</p>
            </div>
        )
    }
}
