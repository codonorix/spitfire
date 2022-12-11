import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Fade from 'react-bootstrap/Fade';

import './Navbar.css'

import logo from '../images/2020 spitfire logo small-1.png'

export const MainNavbar = () => {
    return (
        <>
            <h3>TEST</h3>
            <Navbar bg="light" expand="lg" sticky={'top'}>
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt={'logo'}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Spitfire Culture" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Our Story</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Our Awards</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Careers</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Our Story</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Our Story</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">WFH Entertainment & Tips</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={'What we do'} aria-controls="example-fade-text">
                                <NavDropdown.Item href="#action/3.1">Full Inbound Services</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Inbound Marketing</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Inbound Sales</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Inbound Training</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={'Hub Spot'} controls="example-fade-text">
                                <NavDropdown.Item href="#action/3.1">Grow with HubSpot</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Joburg HUG</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">South Africa Advanced HUG</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">How to use your website to grow your
                                    business</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Frictionless selling with sales
                                    hug</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={'Spitfire Academy'} controls="example-fade-text">
                                <NavDropdown.Item href="#action/3.1">Quarterly Hubspot Production Features
                                    Update</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Hubspot Certification Day</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={'Insights'} controls="example-fade-text">
                                <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Resources</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Case Studies</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Case Studies</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Spitfire Podcast</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        // <Navbar bg={'dark'} className={'navbar-main'}>
        //     <Container>
        //         <Navbar.Brand href={'/'}><img src={logo}/></Navbar.Brand>
        //         <NavDropdown title={'Spitfire Culture'}>
        //             <NavDropdown.Item href="#action/3.1">Our Story</NavDropdown.Item>
        //             <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
        //             <NavDropdown.Item href="#action/3.1">Our Awards</NavDropdown.Item>
        //             <NavDropdown.Item href="#action/3.1">Careers</NavDropdown.Item>
        //             <NavDropdown.Item href="#action/3.1">Our Story</NavDropdown.Item>
        //             <NavDropdown.Item href="#action/3.1">Our Story</NavDropdown.Item>
        //             <NavDropdown.Item href="#action/3.1">WFH Entertainment & Tips</NavDropdown.Item>
        //         </NavDropdown>
        //         <NavDropdown title={'What we do'}>
        //             <NavDropdown.Item href="#action/3.1">Full Inbound Services</NavDropdown.Item>
        //             <NavDropdown.Item href="#action/3.1">Inbound Marketing</NavDropdown.Item>
        //             <NavDropdown.Item href="#action/3.1">Inbound Sales</NavDropdown.Item>
        //             <NavDropdown.Item href="#action/3.1">Inbound Training</NavDropdown.Item>
        //         </NavDropdown>
        //     </Container>
        // </Navbar>
    )
}