import React from 'react'
import { NavLink } from 'react-router-dom'

export const Button = ({ text, icon, route = null, iconLeft, iconRight }) => {
    return (
        <>
            {
                route != '' &&
                <NavLink to={route} type="button"
                    className="btn theme-background-2 px-3 d-flex justify-content-center align-items-center gap-3 ">
                    {iconLeft && icon}
                    {text}
                    {iconRight && icon}
                </NavLink>
            }
        </>
    )
}
