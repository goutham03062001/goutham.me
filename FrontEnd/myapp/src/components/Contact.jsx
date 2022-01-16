import React from 'react';
import "../component_styles/Contact.css";
import Form from "./Form";
const Contact = () => {
    return (
        <>

        
           <div className="contact_page">
                       <div id="description">
                       <p className="text heading">Welcome to Contact Page</p>
                    <small>I appriciate your suggestion </small>
                       </div>


                <div id="contact_form">
                    
                <Form/>
                </div>
            </div> 

           
        </>
    )
}

export default Contact
