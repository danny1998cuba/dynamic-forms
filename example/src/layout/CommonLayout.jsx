import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from '../components'

export const CommonLayout = ({
    children,
    title = 'Title',
    prev = null,
    next = null
}) => {
    return (
        <>
            <h1 className="mb-5">{title}</h1>

            {children}

            <div className="d-flex justify-content-end gap-4">
                {prev && <Button text={prev.title} route={`/${prev.path}`} id="prev" icon={<FontAwesomeIcon icon={faAngleLeft} />} iconLeft />}
                {next && <Button text={next.title} route={`/${next.path}`} id="prev" icon={<FontAwesomeIcon icon={faAngleRight} />} iconRight />}
            </div>
        </>
    )
}
