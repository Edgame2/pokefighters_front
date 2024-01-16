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

    return (
        <div>
            <div className="row" >
                <p>Sign up Form</p>
            </div>
        </div>
    );
};

export default SignupForm;