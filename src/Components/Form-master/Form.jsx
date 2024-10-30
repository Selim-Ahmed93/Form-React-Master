// import React from 'react';

const Form = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        

    console.log(e.target.Name.value);
    console.log(e.target.Email.value);
     console.log(e.target.phone.value);

        console.log('click button');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Name" />
                <br />
                <input type="email" name="Email" />
                <br />
                <input type="text" name="phone"/>
                <input type="submit" value = "Submit" />
                <br />
                
                
            </form>
        </div>
    );
};

export default Form;