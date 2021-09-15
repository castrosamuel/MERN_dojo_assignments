import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const Form = (props) => {
    const [formInfo, setFormInfo]= useState(
        {
        title:"",
        price:0,
        description:""
        });
    const history = useHistory();
    const [validationError, setValidationError] = useState({});
    const changeHandler = e=>{
        setFormInfo({...formInfo,[e.target.name]:e.target.value})
    }

    

    const onSubmit= e =>{
        e.preventDefault();
        console.log('Form has been submited', formInfo)
        
        axios.post('http://localhost:8000/api/new/product', 
            formInfo
        )
            .then(res=>{
                console.log(res)
                if (res.data.err){
                    setValidationError(res.data.err.errors)
                } else {
                    console.log("imported new data")
                    props.setSubmitted(!props.submitted)
                    
                }
            })
            .catch(err=>console.log(err));
        
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={(e)=>changeHandler(e)} value={formInfo.title}></input>
                    <p style={{color:"red"}}>{validationError.title?.message}</p>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="Number" name="price" onChange={(e)=>changeHandler(e)} value={formInfo.price}></input>
                    <p style={{color:"red"}}>{validationError.price?.message}</p>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" name="description" onChange={(e)=>changeHandler(e)} value={formInfo.description}></input>
                    <p style={{color:"red"}}>{validationError.description?.message}</p>
                </div>
                <button type="submit">Create</button>
            </form>

        </div>
    );
};

export default Form;