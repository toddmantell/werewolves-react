import React from "react"
import { arrayOf, object, string } from "prop-types"
import styled from "styled-components"

const Menu = styled.main`
  position: fixed;
  width: 100%;
  height: 50px;
`

const MobileNav = ({ menuItems }) => (
  <Menu>
    {menuItems.map(item => {
      ;<MenuItem {...item} />
    })}
  </Menu>
)

MobileNav.propTypes = {
  menuItems: arrayOf(object)
}

export default MobileNav
