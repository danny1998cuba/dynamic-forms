import React from 'react'
import { NavLink } from 'react-router-dom'

import { paths } from '../data/constants'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light fixed-top theme-background-1">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src="images/logo.svg" alt="" width="70" />
                    <span>d98c_dynamic-forms</span>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar" title="Open navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Documentation</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-flex justify-content-between flex-column">
                        <ul className="navbar-nav flex-grow-1 pe-3 ps-4">
                            <li className="nav-item">
                                <NavLink to={`/${paths.start}`} className="nav-link">Get Started</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/${paths.install}`} className="nav-link" >Install</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/${paths.styling}`} className="nav-link" >Styling</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/${paths.components}`} className="nav-link" >Components</NavLink>
                                <ul className="navbar-nav justify-content-end flex-grow-1 ps-3">
                                    <li className="nav-item">
                                        <NavLink to={`/${paths.checkbox}`} className="nav-link" >Checkbox</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to={`/${paths.header}`} className="nav-link" >Header</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to={`/${paths.input}`} className="nav-link" >Input</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to={`/${paths.radio}`} className="nav-link" >Radio Group</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to={`/${paths.select}`} className="nav-link" >Select</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/${paths.validations}`} className="nav-link" >Validations</NavLink>
                            </li>
                        </ul>
                        <div className="small text-center">
                            <NavLink to="" className="text-decoration-none text-secondary">
                                d98c_dynamic-forms
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
