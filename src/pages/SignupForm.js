import react, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import Loading from '../components/Loading';
import Logo from '../medias/pokemon-logo.png';
import { host as HOST } from '../config/config';


const SignupForm = () => {
    //TODO: Chapter 1: Sign up form
    //TODO: Add Username and Password fields to the form, use Reactstrap Form components
    //TODO: Add a button to submit the form, use Reactstrap component
    //TODO: Add a function to handle the form submission, look at SigninForm.js for an example. (Tip URL is to Backend is different)
    //TODO: Add a function to handle the form inputs on change, look at SigninForm.js for an example. (Tip URL is to Backend is different)
    //TODO BONUS: Add signup success and error messages using toastify, loot at SigninForm.js for an example
    //TODO: Redirect user to /teams if signup is successfull. look at SigninForm.js for an example

    return (
        <div>
            <div className="row" >
                <p>Sign up Form</p>

            </div>
        </div>
    );
};

export default SignupForm;