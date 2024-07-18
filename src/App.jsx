// default export statement:: 
// Exporting:->export default function Gallery(){}
// Importing:-> import Gallery from './Gallery.jsx';

//export function Profile() {}
//import {Profile} from './Profile.jsx';

import Gallery from "./Gallery"
import { Profile } from "./Profile"

function App() {

  return (
    <>
      <h1>Hello World...</h1>
      <Profile/>
      <Gallery/>
    </>
  )
}

export default App
