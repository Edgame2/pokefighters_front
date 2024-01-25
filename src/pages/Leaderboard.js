import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { host as HOST } from '../config/config';
import { toast } from 'react-toastify';

const Leaderboard = () => {

    //TODO Chapter 3: Leaderboard (Difficulty: Medium)
    //TODO: Fix the code below to display the leaderboard
    //TODO: We should see the list of users and their number of wins
    //TODO: The score is missing, url is missing

    const [leaderboard, setLeaderboard] = useState([]);

    const fetchLeaderboard = async () => {
        try {
            const response = await axios.get('', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setLeaderboard(response.data);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {
        fetchLeaderboard();
    }, []);

    return (
        <div>
            <h1>Leaderboard</h1>
            {
                leaderboard.length == 0 && <div>No fights yet.</div>
            }

            {
                leaderboard.length > 0 && <table className="table table-striped">

                    <thead>
                        <tr>
                            <th scope="col">User</th>
                            <th scope="col">Wins</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            leaderboard.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.username}</td>
                                        <td>{ }</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            }
        </div>
    )
}

export default Leaderboard;