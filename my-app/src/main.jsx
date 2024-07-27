import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import GlobalState from './context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
//   <GlobalState>
//     <App/>
//   </GlobalState>,
<BrowserRouter>
  <App/>
</BrowserRouter>

)