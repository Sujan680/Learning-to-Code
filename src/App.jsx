// default export statement:: 
// Exporting:->export default function Gallery(){}
// Importing:-> import Gallery from './Gallery.jsx';

//export function Profile() {}
//import {Profile} from './Profile.jsx';

import About from "./About"
import Bio from "./Bio"
import Cards from "./components/Cards"
import ConditionalRendering from "./components/ConditionalRendering"
import AnotherExample from "./components/ConditionalRendering/AnotherExample"
import LoginLogoutToggle from "./components/ConditionalRendering/LoginLogoutToggle"
import ToggleComponents from "./components/ConditionalRendering/ToggleComponents"
import Gallery from "./Gallery"
import { Profile } from "./Profile"
import Accordion from "./Props"
import TodoList from "./TodoList"

function App() {

  return (
    <>
      {/* <h1>Hello World...</h1>
      <Bio/>
      <Profile/>
      <Gallery/>
      <About/>
      <TodoList/>
      <Accordion/>
      <Cards/>
      <ConditionalRendering/> */}
      <ToggleComponents/>
      <LoginLogoutToggle/>
      <AnotherExample/>
    </>
  )
}
export default App
