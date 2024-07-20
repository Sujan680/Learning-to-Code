// import ProductItems from "./components/ProductItems";
import PropTypes from 'prop-types';
import ProductItems from './components/ProductItems';
// const productsItems = ["Products 1", "products 2", "Products 3"]

const ProductList = ({address, city, lists}) => {
    // console.log(props); 
    // const { address, city } = props;

    const flag = false;

    // function renderTextBlock(getFlag){
    //     return getFlag ? (
    //         <h4 style={{textAlign:"center"}}>{address} is located in Gandaki and headquarter is {city}</h4>
    //     ) : (
    //         <h4 style={{textAlign:"center"}}>Hello world</h4>
    //     )
    // }

    const renderTextBlock = flag ? 
   ( <h4 style={{textAlign:"center"}}>{address} is located in Gandaki and headquarter is {city}</h4> ): (<h4>Hello world</h4>)

    ProductList.propTypes = {
        address: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        lists: PropTypes.string.isRequired,
      }
    return(
        <>
            <h2 style={{color:"red", textAlign:"center"}}>Ecommerce Project</h2>
            {/* <ProductItems/> */}
            {/* {
                flag ?  <h4 style={{textAlign:"center"}}>{address} is located in Gandaki and headquarter is {city} </h4>
                :
                <h3 style={{textAlign:'center'}}>Helo world</h3>
            } */}

            {
                renderTextBlock
            }
           
            <ul style={
                {
                    backgroundColor:"grey",
                    textAlign: "center",

                }
            }>
                {
                    lists.map((item, index) => (
                        <ProductItems myProducts={item} key={index} />
                     )
                )}
            </ul>
        </>
    )
}

export default ProductList;