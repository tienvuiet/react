import { NavLink } from "react-router-dom"

// import React from 'react'
type Post = {
    id: number, 
    title: string,
    excerpt: string
}
export const posts:Post[] =  [   
    {
        id:1,
        title: "Bat dau voi react",
        excerpt: "Gioi thieu react va cach khoi tao du an"
    },
    {
        id:2,
        title: "Su dung tailWind Css",
        excerpt: "Giup ban viet css nhanh va tien loi"
    },
    {
        id:3,
        title: "Quan ly state voi Redux",
        excerpt: "Hooks trong react"
    },
] 
export default function Post() {
    
  return (
    <>
     <div style={{gap: 20}}>  
        {posts.map((p)=>(    
            <div key={p.id}>
                <NavLink to={`/blog/post/${p.id}`}><p>{p.title}</p></NavLink>
                <p>Excerpt: {p.excerpt}</p>
            </div>
        ))}
     </div> 
    </>
  )
}
