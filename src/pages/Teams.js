import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { host as HOST } from '../config/config';
import { toast } from 'react-toastify';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
    Col
} from 'reactstrap';

const Teams = () => {
    //TODO: Chapter 2: My Team (Difficulty: Hard)
    //TODO: Show the list of pokemon in the user's team. Use function map to display the list of pokemon
    // Help Link: https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know
    // Look at the Step 3 for an example
    // use the state variable team get the list of pokemon
    // Example: https://drive.google.com/file/d/1BcGebrYq0-uMMoq1PMq9yIXKictXcs5U/view?usp=sharing

    const [formData, setFormData] = useState({
        pokemon_id: ''
    });

    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTeam = async () => {
        try {
            const response = await axios.get(HOST + '/users/me', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setTeam(response.data.team.members);
        } catch (error) {
            setError(error);
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchTeam();
    }, []);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error!</div>

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(HOST + '/users/team-members/' + formData.pokemon_id, {}, {
                headers: {
                    authorization: "Bearer " + localStorage.getItem('token')
                }
            });
            toast.success('Pokemon added to your team.');
            await fetchTeam();
            console.log(team);
        }
        catch (err) {
            toast.error(err.response.data.message);
        }

    };

    return (
        <div>
            <h1>My Team</h1>
            <div className="row m-8">
                <p>Enter below the ID of the pokemon you want to add to your team.</p>
            </div>
            <div className="row ">
                <div className="col-2"></div>
                <div className="col-8">
                    <p>
                        <Form className="form">
                            <Row className="row-cols-lg-auto g-3 align-items-center">
                                <Col>
                                    <Input
                                        type="text"
                                        name="pokemon_id"
                                        placeholder="pokemon id (ex: 11)"
                                        onChange={handleFormChange}
                                        value={formData.username}
                                    />

                                </Col>
                                <Col>
                                    <Button onClick={handleSubmit}>Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </p>
                </div>
                <div className="col-2"></div>
            </div>

            {
                // If no teams are found
                team.length === 0 && <p>No teams found</p>
            }


        </div>
    )
}

export default Teams;