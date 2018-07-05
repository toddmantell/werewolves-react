import React from "react"
import Layout from "../../src/components/Layout"
import toJson from "enzyme-to-json"

describe("Name of the group", () => {
  it("should render the mobile nav when window size is < 400", () => {
    const shallowRenderedLayout = shallow(<Layout windowSize={350} />)

    expect(shallowRenderedLayout.find("MobileNav").length).toBe(1)
  })

  it("should render the desktop nav when window size is > 400", () => {
    const shallowRenderedLayout = shallow(<Layout windowSize={1200} />)

    expect(shallowRenderedLayout.find("TopNav").length).toBe(1)
  })

  it("should not render a nav when window size is null", () => {
    const shallowRenderedLayout = shallow(<Layout windowSize={undefined} />)

    expect(shallowRenderedLayout.find("Nav").length).toBe(0)
    expect(shallowRenderedLayout.find("MobileNav").length).toBe(0)
  })
})
