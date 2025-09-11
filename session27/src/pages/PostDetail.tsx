// import React from 'react'
import { useParams } from "react-router-dom"
import { posts } from "./Post"
export default function PostDetail() {
    const {id} = useParams()
    const post = posts.find((p)=>p.id.toString()===id)
    return (
        <>
            <div>
                <p>{post?.title}</p>
                <p>{post?.excerpt}</p>
            </div>
        </>
    )
}
