import React, {useState} from 'react';
import axios from 'axios';

const Form = () => {
    const [formInfo, setFormInfo]= useState(
        {
        title:"",
        price:0,
        description:""
        });
    
    const changeHandler = e=>{
        setFormInfo({...formInfo,[e.target.name]:e.target.value})
    }

    const onSubmit= e =>{
        e.preventDefault();
        console.log('Form has been submited', formInfo)

        axios.post('http://localhost:8000/api/new/product', 
            formInfo
        )
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
        
    }

    return (
        <div>
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

export default Form;