import React, {useState, useEffect} from 'react';
import { useParams } from "react-router"
import axios from "axios";

const DisplayOne = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res=>{
                setProduct(res.data.results);
            })
            .catch(err => console.error(err));
    },[]);


    return (
        <div>
            <h1>{product.title}</h1><br/>
            Price: {product.price}<br/>
            Description: {product.description}
        </div>
    );
};

export default DisplayOne;