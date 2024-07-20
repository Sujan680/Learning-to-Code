
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalComponent from './components/functionalComponent'
import ProductList from './products'

const productsItems = ["Products 1", "products 2", "Products 3"]

function App() {
 
  return (
    <>
      <h2>React js tuotorial 2024</h2>

      <ClassBasedComponent/>

      <FunctionalComponent/>

      <ProductList lists={productsItems}  address="Myagdi" city="Pokhara" />
    </>
  )
}

export default App
