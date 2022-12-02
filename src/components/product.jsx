import "./product.css";
import QuantityPicker from "./quantityPicker";
import dataContext from "../state/dataContext";
import { useContext } from "react";
import { useState } from "react";
function Product(props) {
    const addProd = useContext(dataContext).addProductToCart;
    const [quantity, setQuantity] = useState(1);

    const handleAdd = () => {
    // call the context function
    let prodForCart = {...props.data, quantity: quantity};
    addProd(prodForCart);
    };

    const handleQuantityChange = (quantity) => {
        setQuantity(quantity);
    };

    return (
        <div className="product">

            <img src={"/images/" + props.data.image} alt="" />

            <h5>{props.data.title}</h5>

            <div className="prices">
            <label>${props.data.price}</label>
            <label>${props.data.price.toFixed(2)}</label>
            </div>

            <QuantityPicker />

            <button onClick={handleAdd} className="btn btn-info">Add</button>
        </div>

    );
} 

export default Product;

