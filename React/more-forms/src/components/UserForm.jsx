import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const[FirstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const[LastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const[EmailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const[PasswordError, setPasswordError] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const[ConfPasswordError, setConfPasswordError] = useState("");
    
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    

    const handleFirstName = e =>{
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        } else{
            setFirstNameError("");
        }
    }

    const handleLastName = e =>{
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        } else{
            setLastNameError("");
        }
    }

    const handleEmail = e =>{
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else{
            setEmailError("");
        }
    }
    const handlePassword = e => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else{
            setPasswordError("");
        }
    }
    const handleConfPassword = e =>{
        setConfPassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfPasswordError("Confirmation Password is required!");
        } else if(e.target.value.length < 8) {
            setConfPasswordError("Confirmation Password must be 8 characters or longer!");
        } else if(e.target.value !== password) {
            setConfPasswordError("Password does not match");
        } else{
            setConfPasswordError("");
        }
    }


    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thank you for submitting the form!";
	} else {
	    return "Welcome, please submit the form";
	}
    };


    return (
        <form onSubmit={ createUser }>
            <h3>{ formMessage() }</h3>
	    <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirstName } name="FirstName"/>
                {
                    FirstNameError ?
                    <p style={{color:'red'}}>{ FirstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastName } name="LastName"/>
                {
                    LastNameError ?
                    <p style={{color:'red'}}>{ LastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail } name="email"/>
                {
                    EmailError ?
                    <p style={{color:'red'}}>{ EmailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } name="password"/>
                {
                    PasswordError ?
                    <p style={{color:'red'}}>{ PasswordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirmation Password: </label>
                <input type="text" onChange={ handleConfPassword } name = "ConfPassword"/>
                {
                    ConfPasswordError ?
                    <p style={{color:'red'}}>{ ConfPasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default UserForm;
