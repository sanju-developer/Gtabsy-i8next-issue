import React, { useEffect, useState } from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

import SEO from "../../components/seo"

function Detail(props) {
  const [postComments, setPostComments] = useState([])
  const { t } = useTranslation()

  useEffect(() => {
    getPostComments()
  }, [])

  const getPostComments = async () => {
    if (props && props.id) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${props.id}/comments`
      )
      const jsonRes = await response.json()
      setPostComments(jsonRes)
    }
  }

  return (
    <>
      <SEO title={`Comments on Post ${props.id}`} />
      {t("Detail Page")}
      {postComments.length !== 0 &&
        postComments.map(Comment => (
          <div key={Comment.id}>
            <p>{Comment.id}</p>
            <p>{Comment.name}</p>
          </div>
        ))}
    </>
  )
}

export default Detail
