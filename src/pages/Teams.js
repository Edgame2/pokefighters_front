import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { host as HOST } from '../config/config';
const Teams = () => {

    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTeams = async () => {
        try {
            const response = await axios.get(HOST + '/teams', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setTeams(response.data.docs);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchTeams();
    }, []);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error!</div>

    return (
        <div>
            <h1>Teams</h1>

            {
                // If no teams are found
                teams.length === 0 && <p>No teams found</p>
            }
            <ul>

                {teams.map(team => <li key={team.id}>{team.name}</li>)}
            </ul>
        </div>
    )
}

export default Teams;