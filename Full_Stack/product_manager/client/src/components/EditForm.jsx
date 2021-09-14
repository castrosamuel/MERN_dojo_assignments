import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from "axios";

const EditForm = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [formInfo, setFormInfo]= useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res=>{
                // setProduct(res.data.results);
                setFormInfo(
                    {
                        "title":res.data.results.title,
                        "price":res.data.results.price,
                        "description":res.data.results.description
                    })
            })
            .catch(err => console.error(err));
    },[]);


    const onSubmit = e =>{
        console.log(e)
        e.preventDefault();
        axios.put('http://localhost:8000/api/update/product/' + id, formInfo)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    const changeHandler = e=>{
        setFormInfo({...formInfo,[e.target.name]:e.target.value})
    }

    return (
        <div>
            <h1>Edit Page</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={(e)=>changeHandler(e)} value={formInfo.title}></input>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="Number" name="price" onChange={(e)=>changeHandler(e)} value={formInfo.price}></input>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" name="description" onChange={(e)=>changeHandler(e)} value={formInfo.description}></input>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};


export default EditForm;