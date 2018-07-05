import React from "react"
import { render, hydrate } from "react-dom"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ModeratorContainer from "../Moderator"
import Night from "../Night"
import Layout from "../Layout"
import Nav from "../Layout/Nav"

//TODO: Layout should go here
const App = () => (
  <main>
    <Layout windowSize={window.innerWidth} />
    <Route exact path="/" component={() => ""} />
    <Route path="/moderator" component={ModeratorContainer} />
    <Route path="/night" component={Night} />
  </main>
)

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
)
