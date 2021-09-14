import React, {useState, useEffect} from 'react';
import { useParams } from "react-router"
import axios from "axios";
import { useHistory } from "react-router-dom";

const DisplayOne = () => {
    const history = useHistory();
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res=>{
                setProduct(res.data.results);
            })
            .catch(err => console.error(err));
    },[]);

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/delete/product/' + id)
            .then(res => {
                // removeFromDom(id)
                history.push("/")
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>{product.title}</h1><br/>
            Price: {product.price}<br/>
            Description: {product.description}
            <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
        </div>
    );
};

export default DisplayOne;