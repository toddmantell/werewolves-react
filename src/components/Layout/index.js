/* eslint curly: 0 */
import React from "react"
import PropTypes from "prop-types"
import TopNav from "./TopNav"
import Footer from "./Footer"
import MobileNav from "./MobileNav"

const Layout = ({ windowSize }) =>
  <div>
    {renderTopNav(windowSize)}
    <h2>Header!</h2>
    <div style={{ color: "purple", fontWeight: "600" }}>
      Put app content here.
    </div>
    <Footer />
    {renderBottomNav(windowSize)}
  </div>

function renderTopNav(windowSize) {
  console.log("windowSize", windowSize)

  if (windowSize > 400) return <TopNav />
  return null
}

function renderBottomNav(windowSize) {
  if (windowSize <= 400)
    return <MobileNav menuItems={["something", "another thing"]} />
  return null
}

Layout.propTypes = {
  windowSize: PropTypes.number.isRequired
}

export default Layout
