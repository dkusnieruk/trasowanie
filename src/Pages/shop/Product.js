import { Link, useLocation } from "react-router-dom";

function Product() {

    const location = useLocation();
    console.log(location);

return (<>
    <h2>Product details</h2>
    <Link to={location.state.from} >Go back to serch results</Link>
    </>  );


}

export default Product;