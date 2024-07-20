// import ProductItems from "./components/ProductItems";
import PropTypes from 'prop-types';
import ProductItems from './components/ProductItems';
// const productsItems = ["Products 1", "products 2", "Products 3"]

const ProductList = ({address, city, lists}) => {
    // console.log(props); 
    // const { address, city } = props;

    ProductList.propTypes = {
        address: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        lists: PropTypes.string.isRequired,

      }
    return(
        <>
            <h2>Ecommerce Project</h2>
            {/* <ProductItems/> */}
            <h4>{address} is located in Gandaki and headquarter is {city} </h4>

            <ul>
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