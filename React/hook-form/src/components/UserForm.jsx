
const UserForm = (props) => {
    const{inputs, setInputs} = props;

    const onChange = e => {
        // e.preventDefault();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value 
        })
    };
    
    return(
        
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ onChange } name="firstName"/>
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ onChange } name="lastName"/>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ onChange } name="email"/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ onChange } name="password"/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ onChange } name="confPassword"/>
            </div>
        </form>

    );
};

export default UserForm;