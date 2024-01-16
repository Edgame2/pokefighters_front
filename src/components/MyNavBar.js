import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';

import { Route, Routes } from 'react-router-dom';


import SigninForm from '../pages/SigninForm';
import SignupForm from '../pages/SignupForm';

function MyNavBar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const isLoggedIn = () => {

        if (localStorage.getItem('token') != null) {
            return true;
        }
        return false;
    }


    return (
        <div>
            <Navbar {...args}>
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>

                        {isLoggedIn() ? (
                            <div>
                                <NavItem>
                                    <NavLink href="/teams/">Teams</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/users/">Users</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/users/">Fights</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/users/">Logout</NavLink>
                                </NavItem>
                            </div>
                        ) : (
                            <div>
                                <NavItem>
                                    <NavLink href="/signin/">Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/signup/">Sign Up</NavLink>
                                </NavItem>
                            </div>
                        )}

                    </Nav>

                </Collapse>
            </Navbar>

        </div>
    );
}

export default MyNavBar;