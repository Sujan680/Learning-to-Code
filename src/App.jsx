// default export statement:: 
// Exporting:->export default function Gallery(){}
// Importing:-> import Gallery from './Gallery.jsx';

//export function Profile() {}
//import {Profile} from './Profile.jsx';

import Bio from "./Bio"
import Gallery from "./Gallery"
import { Profile } from "./Profile"

function App() {

  return (
    <>
      <h1>Hello World...</h1>
      <Bio/>
      <Profile/>
      <Gallery/>
      
    </>
  )
}
export default App
