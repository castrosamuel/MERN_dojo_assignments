import React, { useState, useEffect } from  'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
const Form = (props) => {
    const[name, setName] = useState("people");
    const[idx, setIdx] = useState("");
    const history = useHistory();
    const [categories, setCategories]= useState([])

    useEffect(()=>{
        //use axios to get all the categories
        axios.get("https://swapi.dev/api/")
            .then(res=>{
                setCategories(Object.keys(res.data))
            })
            .catch(err=> console.log(err))
    },[])

    const sendData = (e) => {
        e.preventDefault();
        history.push(`/${name}/${idx}`);
    }

	return(
        <div className="container">
            <form onSubmit={sendData}>
                <div className="row justify-content-md-center">
                    <div className="col-3 d-flex justify-content-between align-items-center mb-3">
                        <label className="form-label">Search For:</label>
                        <select className="form-select" aria-label="Default select example" defaultValue="People" onChange={(e) => setName(e.target.value)}>
                            {
                                categories.map((cat,i)=>{
                                    return <option key= {i} value={cat}>{cat}</option>
                                })
                            }
                            {/* <option value="people">people</option>
                            <option value="planets">planets</option> */}
                        </select>
                    </div>
                    <div className="col-2 d-flex justify-content-between align-items-center mb-3">
                        <label className="form-label">ID:</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setIdx(e.target.value)} />
                    </div>
                    <div className="col-2 d-flex align-items-center mb-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Form;
