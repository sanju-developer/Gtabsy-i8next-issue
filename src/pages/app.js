import React from "react"
import { Router } from "@reach/router"

import Posts from "./posts"
import Detail from "./posts/detail"

function App() {
  return (
    <Router>
      <Posts path="/app/posts" />
      <Detail path="/app/posts/detail/:id" />
      <Posts path="/" />
    </Router>
  )
}

export default App
