import { Link, useRoutes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function CustomRoutes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />
    },
  ]);
  return routes;
}

function App() {
  const navigate = useNavigate();

  return (

    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <button onClick={() => navigate('/')}>Go to Home</button>
      <button onClick={() => navigate('/about')}>Go to About</button>
      <button onClick={() => navigate('/contact')}>Go to Contact</button>

      <CustomRoutes />
    </div>

  );
}

export default App;
