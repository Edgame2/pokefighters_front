import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { host as HOST } from '../config/config';
import { toast } from 'react-toastify';

const Users = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(HOST + '/users/list', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setUsers(response.data);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {
        // Get list of users
        fetchUsers();
    }, []);

    return (
        <div>
            <div className='row mb-8'>
                <h1>Players</h1>
            </div>
            <div className='row mb-8'>
                <div className='col-12'>
                    <br />
                    <p>
                        Choose your opponent from the list below.
                    </p>
                    <br />
                </div>
                <p>
                    <hr />
                </p>
            </div>
            <div className='row mt-8'>
                {users.length === 0 && <div>No players yet.</div>}
                <p>
                    {
                        users.length > 0 && users.map((user) => {
                            return (
                                <div className='col-12' key={user._id}>
                                    <div className="row" key={user._id}>
                                        <a href='#' className='btn btn-primary' onClick={() => window.location.href = '/fighting/' + user._id}>{user.username}</a>
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