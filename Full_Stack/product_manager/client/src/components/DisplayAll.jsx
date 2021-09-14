import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter,Link, Switch, Route} from "react-router-dom";

const DisplayAll = () => {
    const [listOfProducts, setListOfProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setListOfProducts(res.data.results);
            })
            .catch(err => console.error(err));
    },[]);

    return (
        <div>
            <h3>All Products</h3>
            {listOfProducts.map((product, i)=>{
                return <div key={i}><Link to={`/product/${product._id}`}>{product.title}</Link></div>
            })}
        </div>
    );
};


export default DisplayAll;