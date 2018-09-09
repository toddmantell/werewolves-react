import Adapter from "enzyme-adapter-react-16"
import Enzyme from "enzyme"

Enzyme.configure({ adapter: new Adapter() })

global.shallow = Enzyme.shallow
global.mount = Enzyme.mount
global.render = Enzyme.render
