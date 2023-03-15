import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import React from 'react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
                                    <FontAwesomeIcon icon={faLinkedin} className='me-2' />
                                    Linkedin
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/danny1998cuba" className="text-decoration-none" target="_blank"
                                    rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className='me-2' />
                                    Github
                                </a>
                            </li>
                            <li>
                                <a href="mailto://danny.glezcuet98@gmail.com" className="text-decoration-none">
                                    <FontAwesomeIcon icon={faEnvelope} className='me-2' />
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
