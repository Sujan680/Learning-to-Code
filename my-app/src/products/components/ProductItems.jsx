const ButtonComponent = () => {
    return(
        <div>
            <button>Click me</button>
        </div>
    )
}

const ProductItems = ({myProducts, key}) => {
  return (
    <div key={key}>
        <h3>{myProducts} </h3>

        <ButtonComponent/>
    </div>
  )
}

export default ProductItems;