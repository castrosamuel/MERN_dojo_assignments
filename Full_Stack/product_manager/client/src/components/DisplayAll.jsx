import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const DisplayAll = () => {
    const [listOfProducts, setListOfProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setListOfProducts(res.data.results);
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = id => {
        setListOfProducts(listOfProducts.filter(product => product._id !== id));
    }

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/delete/product/' + id)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h3>All Products</h3>
            {listOfProducts.map((product, i)=>{
                return <div key={i}><Link to={`/product/${product._id}`}>{product.title}</Link><button onClick={(e)=>{deleteProduct(product._id)}}>
                Delete
            </button></div>
            })}
        </div>
    );
};


export default DisplayAll;