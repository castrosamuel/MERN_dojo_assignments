import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const AuthorForm = (props) => {
    const { initialName, onSubmitProp, validationErrors} = props;
    const [name, setName] = useState(initialName)
    
    const history = useHistory();

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
        if (validationErrors.name){
            history.push("/")
        }
    }

    const cancel = e =>{
        history.push("/");
    }

    return (
        <div>
            <p>Add a new author:</p>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name</label><br />
                    <input 
                        type="text" 
                        name="name" value={name}
                        onChange={(e) => { setName(e.target.value) }}></input>
                </p>
                <p>{validationErrors?.name?.message}</p>

                <button onClick={cancel}>Cancel</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AuthorForm;