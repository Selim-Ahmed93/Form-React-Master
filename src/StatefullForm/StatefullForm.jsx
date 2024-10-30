// import React from 'react';

import { useState } from "react";


const StatefullForm = () => {

    const [Password,setPassword] = useState()


    const [Email,setEmail] =useState();
    const handleSubmit= e => {

     e.preventDefault ();
       console.log(e.target.Name.value);
       console.log(e.target.Email.value);
       console.log(e.target.Password.value);
      
    };

    const handleEmailChange = e =>{
        e.preventDefault ();
        setEmail(e.target.value)
console.log(e.target.value);
    }
    const handlePassword = e => {
        e.preventDefault();
        console.log(e.target.value);
        setPassword(e.target.value)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Name" />
                <br />
                <input onChange={handleEmailChange} type="email" name="Email" />
                <br />
                <input onChange={handlePassword} type="password" name="Password"/>
                <br />
                <input type="submit" value = "Submit" />
                <br />
                
                
            </form> 
        </div>
    );
};

export default StatefullForm;