import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Component, Components, GetStarted, Install, Styling, Validations } from '../../pages'
import { routes } from '../constants/'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route key={'dash_redirect'} path='' element={<Navigate to={`/${routes[0].path}`} replace={true} />} />,

            <Route path={routes[0].path} element={<GetStarted />} />
            <Route path={routes[1].path} element={<Install />} />
            <Route path={routes[2].path} element={<Styling />} />
            <Route path={routes[3].path} element={<Components />} />

            {
                routes
                    .filter(route => route.path.includes('component/'))
                    .map((route, index) => {
                        let idx = routes.indexOf(route)
                        let prev = null, next = null

                        if (idx != 0 && idx != -1) prev = routes[idx - 1]
                        if (idx < routes.length - 1) next = routes[idx + 1]

                        return <Route key={`route_${index}`} path={route.path} element={
                            <Component
                                name={route.title}
                                prev={prev}
                                next={next}
                            />
                        } />
                    })
            }

            <Route path={routes[routes.length - 1].path} element={<Validations />} />
            <Route path="*" element={<Navigate to={`/${routes[0].path}`} replace={true} />} />
        </Routes>
    )
}
