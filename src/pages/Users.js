import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { host as HOST } from '../config/config';
const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Get list of users
        axios.get(`${HOST}users/list`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) => {
                console.log(res.data.docs);
                setUsers(res.data.docs);
            })
            .catch((err) => {
                console.log(err);
            })
    }
        , []);

    return (
        <div>
            <div className='row mb-8'>
                <h1>Fight</h1>
            </div>
            <div className='row mb-8'>
                <div className='col-12'>
                    <br />
                    <p>
                        Choose the users you want to start a fight with:
                    </p>
                    <br />
                </div>
                <p>
                    <hr />
                </p>
            </div>
            <div className='row mt-8'>
                <p>
                    {
                        users.length > 0 && users.map((user) => {
                            return (
                                <div className='col-12' key={user._id}>
                                    <div key={user._id}>
                                        <p>{user.username}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </p>
            </div>
        </div>
    )
}

export default Users;