import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Component, Components, GetStarted, Install, Styling, Validations } from '../../pages'
import { CommonLayout } from '../../layout'
import { routes } from '../constants/'

import data from '../components'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route key={'dash_redirect'} path='' element={<Navigate to={`/${routes[0].path}`} replace={true} />} />,

            <Route path={routes[0].path} element={
                <CommonLayout next={routes[1]} title={routes[0].title}><GetStarted /></CommonLayout>
            } />
            <Route path={routes[1].path} element={
                <CommonLayout prev={routes[0]} next={routes[2]} title={routes[1].title}><Install /></CommonLayout>
            } />
            <Route path={routes[2].path} element={
                <CommonLayout prev={routes[1]} next={routes[3]} title={routes[2].title}><Styling /></CommonLayout>
            } />
            <Route path={routes[3].path} element={
                <CommonLayout prev={routes[2]} next={routes[4]} title={routes[3].title}><Components /></CommonLayout>
            } />

            {
                routes
                    .filter(route => route.path.includes('component/'))
                    .map((route, index) => {
                        let idx = routes.indexOf(route)
                        let prev = null, next = null

                        if (idx !== 0 && idx !== -1) prev = routes[idx - 1]
                        if (idx < routes.length - 1) next = routes[idx + 1]

                        let id = route.path.replace('component/', '')

                        return <Route key={`route_${index}`} path={route.path} element={
                            <Component
                                name={route.title}
                                prev={prev}
                                next={next}
                                data={data[id]}
                            />
                        } />
                    })
            }

            <Route path={routes[routes.length - 1].path} element={
                <CommonLayout prev={routes[routes.length - 2]} title={routes[routes.length - 1].title}><Validations /></CommonLayout>
            } />
            <Route path="*" element={<Navigate to={`/${routes[0].path}`} replace={true} />} />
        </Routes>
    )
}
