import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import { toast } from 'react-toastify';

function MyNavBar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const isLoggedIn = () => {

        if (localStorage.getItem('token') != null) {
            return true;
        }
        return false;
    }

    // Logout user
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/';
        toast.success('Logout successfull');
    };

    return (
        <div>
            <Navbar container="fluid" expand="sm" color="light" full={false}>
                <NavbarBrand href="/">Poke Fighters</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>


                    {isLoggedIn() ? (
                        <div>
                            <Nav className="me-auto" navbar>
                                <NavItem>
                                    <NavLink href="/teams/">Teams</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/users/">Users</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/fights/">Fights</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="#" className="btn btn-danger" onClick={logout}>Logout</NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    ) : (
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/signup/">Sign Up</NavLink>
                            </NavItem>
                        </Nav>
                    )}
                </Collapse>
            </Navbar>

        </div >
    );
}

export default MyNavBar;