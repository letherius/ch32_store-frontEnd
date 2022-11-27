import Product from "../components/product";
import "./catalog.css";
import {useEffect, useState } from 'react';
import DataService from "../services/dataService";

function Catalog () {
    let [products, setProducts ] = useState([]);

    // arrow function
   const loadCatalog = () => {
    let service = new DataService();
    let prods = service.getCatalog();
    setProducts (prods);
   };
   
   // exec when the component is displayed
    useEffect(() => {
        loadCatalog();
    },  []);

    return (
    <div className="catalog">
        <h1>Choose Your Favorite Flavor</h1>
        <h4>We have {products.length} flavors</h4>
        

        {products.map((prod) => (
            <Product key={prod._id}  data={prod} /> ))}

    </div>
    );
}

export default Catalog;