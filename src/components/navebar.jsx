import React from "react";
import './style.css'
import { Navbar, Nav, Badge, NavDropdown } from "react-bootstrap";

const NaveBar = ({setCategory})=>{
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark" className="p-2">
                    <Navbar.Brand href="/"><Badge bg="light text-dark">NewsMag</Badge></Navbar.Brand>
                    <div className="nav-items">
                        <Nav className="me-auto" >
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <div className="nav-link" onClick={()=> setCategory('business')}>Business</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link" onClick={()=> setCategory('entertainment')}>Entertainment</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link" onClick={()=> setCategory('health')}>Health</div>
                                    </li>
                                    {/* <li className="nav-item">
                                        <div className="nav-link" onClick={()=> setCategory('science')}>Science</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link" onClick={()=> setCategory('sports')}>Sports</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link" onClick={()=> setCategory('technology')}>Technology</div>
                                    </li> */}
                                    <NavDropdown title="More" id="navbarScrollingDropdown">
                                        <NavDropdown.Item >
                                            <li className="nav-item">
                                                <div className="nav-link" onClick={()=> setCategory('sports')}>Sports</div>
                                            </li>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item >
                                            <li className="nav-item">
                                                <div className="nav-link" onClick={()=> setCategory('science')}>Science</div>
                                            </li>                                    
                                        </NavDropdown.Item>
                                        {/* <NavDropdown.Divider /> */}
                                        <NavDropdown.Item href="#action5">
                                            <li className="nav-item">
                                                <div className="nav-link" onClick={()=> setCategory('technology')}>Technology</div>
                                            </li>                                    
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </ul>
                            </div>
                        </Nav>
                    </div>
            </Navbar>
        </>
    )
}

export default NaveBar;