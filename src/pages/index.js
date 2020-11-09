import React from "react"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi Ben :)</h1>
      <Link to="/app/posts/">{t("Go to Posts page")}</Link> <br />
    </Layout>
  )
}

export default IndexPage
