import React, { useState } from  'react';
import { useHistory } from "react-router-dom";

const Form = (props) => {
    const[name, setName] = useState("");
    const[idx, setIdx] = useState("");
    const history = useHistory();

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
                            <option value="people">people</option>
                            <option value="planets">planets</option>
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
