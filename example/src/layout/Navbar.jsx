import React from 'react'

export const Navbar = () => {
    return (
        <nav class="navbar navbar-light fixed-top theme-background-1">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img src="images/logo.svg" alt="" width="70" />
                    <span>d98c_dynamic-forms</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar" title="Open navbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Documentation</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body d-flex justify-content-between flex-column">
                        <ul class="navbar-nav flex-grow-1 pe-3 ps-4">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Get Started</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Install</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Styling</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Components</a>
                                <ul class="navbar-nav justify-content-end flex-grow-1 ps-3">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Checkbox</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Header</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Input</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Radio Group</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Select</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Validations</a>
                            </li>
                        </ul>
                        <div class="small text-center">
                            <a href="" class="text-decoration-none text-secondary">
                                d98c_dynamic-forms
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
