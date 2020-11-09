import { useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import React from "react"
import { useState } from "react"
import { useEffect } from "react"

function Posts() {
  const [posts, setPosts] = useState([])
  const { navigate } = useI18next()
  const { t } = useTranslation()
  
  useEffect(() => {
    getPosts()
  })

  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const jsonRes = await res.json()
    const response = jsonRes.splice(0,10);
    setPosts(response)
  }

  return (
    <div style={{padding:'3rem'}}>
      {posts.map(post => (
        <div className="post" key={post.id}>
          <h3>{post.id}</h3>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <button
          style={{marginBottom:'1rem'}}
            onClick={() =>
              navigate(`/app/posts/detail/${post.id}`, { state: post.id })
            }
          >
            {t('Get details')}
          </button>
          <hr/>
        </div>
      ))}
    </div>
  )
}

export default Posts
