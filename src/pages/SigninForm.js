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
const SigninForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Login user with email and password
    const login = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post(HOST + '/users/login', {
                username: formData.username,
                password: formData.password
            });
            console.log(res);

            // Save token in local storage
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            window.location.href = '/teams';

            setLoading(false);
        } catch (err) {
            setError(err.response.data.message);
            setLoading(false);
        }
    };

    // Handle form imputs on change
    const handleFormChange = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
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
            <div className="row" >
                <div className="mt-20 mb-20 pt-20" >
                    <p>Welcome</p>
                    <br />
                    <img src={Logo} alt="Logo" className='mb-20' />
                    <br />
                    <br />
                </div>
            </div>


            <div className="row" >
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

export default SigninForm;