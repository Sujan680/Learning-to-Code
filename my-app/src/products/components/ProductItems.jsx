const ButtonComponent = () => {
    return(
        <div>
            <button>Click me</button>
        </div>
    )
}

const ProductItems = ({myProducts, key}) => {
  return (
    <div key={key} style={{border: "1px solid black",
      margin:"3px",
      padding:"10px",
      backgroundColor:"brown",
      width:"100%"
    }}>
        <h3 > {myProducts} </h3>

        <ButtonComponent/>
    </div>
  )
}

export default ProductItems;