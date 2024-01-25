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
import { toast } from 'react-toastify'

const SignupForm = () => {
    //TODO: Chapter 1: Sign up form
    //TODO: Add Username and Password fields to the form, use Reactstrap Form components
    //TODO: Add a button to submit the form, use Reactstrap component
    //TODO: Add a function to handle the form submission, look at SigninForm.js for an example. (Tip URL is to Backend is different)
    //TODO: Add a function to handle the form inputs on change, look at SigninForm.js for an example. (Tip URL is to Backend is different)
    //TODO BONUS: Add signup success and error messages using toastify, loot at SigninForm.js for an example
    //TODO: Redirect user to /teams if signup is successfull. look at SigninForm.js for an example

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Login user with email and password
    const login = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {

            const res = await axios.post(HOST + '/users/signup', {
                username: formData.username,
                password: formData.password
            });
            console.log(res);

            // Display success message
            toast.success('Login successfull');

            // Save token in local storage
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', { username: res.data.username, id: res.data.id });
            window.location.href = '/teams';

            setLoading(false);
        } catch (err) {
            toast.error(err.response.data.message);
            setError(err.response.data.message);
            setLoading(false);
        }
    };

    // Handle form imputs on change
    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Login on submit
    const handleSubmit = (e) => {
        e.preventDefault();
        login(e);
    };



    return (
        <div>
            <p></p>
            <div className="row mt-8 mb-8" >
                <div className="lg-12" >
                    <img src={Logo} alt="Logo" className='mb-20' />
                </div>
            </div>

            <p></p>
            <div className="row mt-14" >
                <div className='col-4'></div>
                <div className='col-4'>
                    {loading && <div className="mt-8"><Loading /></div>}
                    {!loading && (
                        <div className="mt-20">
                            <Form className="form">
                                <FormGroup>
                                    <Label for="exampleEmail">Username</Label>
                                    <Input
                                        type="username"
                                        name="username"
                                        onChange={handleFormChange}
                                        value={formData.username}
                                        placeholder="username"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        onChange={handleFormChange}
                                        value={formData.password}
                                        placeholder="********"
                                    />
                                </FormGroup>
                                <Button onClick={handleSubmit}>Submit</Button>
                            </Form>
                        </div>
                    )}
                </div>
            </div>
            <div className='col-4'></div>
        </div>
    );
};

export default SignupForm;