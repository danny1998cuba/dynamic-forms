import React from 'react'

export const Footer = () => {
    return (
        <footer className="theme-background-1 w-100 fixed-bottom">
            <div className="container h-100">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="copy">
                        <img src="favicon.ico" alt="" width="25" className="me-3" />
                        <a href="/" className="text-decoration-none small">
                            d98c_sw
                        </a>
                    </div>
                    <div>
                        <ul className="d-flex justify-content-evenly m-0 list-unstyled gap-4 small">
                            <li>
                                <a href="https://linkedin.com/in/danny98cuba" className="text-decoration-none" target="_blank"
                                    rel="noopener noreferrer">
                                    <i className="fa fab-linkedin"></i>
                                    Linkedin
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/danny1998cuba" className="text-decoration-none" target="_blank"
                                    rel="noopener noreferrer">
                                    <i className="fa fab-github"></i>
                                    Github
                                </a>
                            </li>
                            <li>
                                <a href="mailto://danny.glezcuet98@gmail.com" className="text-decoration-none">
                                    <i className="fa fas-envelop"></i>
                                    Mail
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
