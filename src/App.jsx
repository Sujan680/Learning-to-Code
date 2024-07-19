// default export statement:: 
// Exporting:->export default function Gallery(){}
// Importing:-> import Gallery from './Gallery.jsx';

//export function Profile() {}
//import {Profile} from './Profile.jsx';

import About from "./About"
import Bio from "./Bio"
import Gallery from "./Gallery"
import { Profile } from "./Profile"
import Accordion from "./Props"
import TodoList from "./TodoList"

function App() {

  return (
    <>
      <h1>Hello World...</h1>
      <Bio/>
      <Profile/>
      <Gallery/>
      <About/>
      <TodoList/>
    <Accordion/>
      
    </>
  )
}
export default App
