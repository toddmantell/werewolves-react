import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const TopNav = props => (
  <nav style={{ backgroundColor: "midnightblue" }}>
    <span style={{ color: "white", fontWeight: 600 }}>
      <Link to="/moderator">Moderator</Link>
    </span>
    <span style={{ color: "white", fontWeight: 600 }}>
      <Link to="/night">Night</Link>
    </span>
  </nav>
)

export default TopNav
