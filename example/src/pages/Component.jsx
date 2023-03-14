import React from 'react'
import { Button, GeneratedDom, JsonDirective } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export const Component = ({
    name = 'Component name',
    description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quas minus ipsam accusamus est corporis',
    prev = null,
    next = null,
}) => {
    return (
        <>
            <h1 class="mb-3">{name}</h1>

            <p>
                {description}
            </p>

            <JsonDirective />

            <GeneratedDom />

            <div class="d-flex justify-content-end gap-4">
                {prev && <Button text={prev.title} route={`/${prev.path}`} id="prev" icon={<FontAwesomeIcon icon={faAngleLeft} />} iconLeft />}
                {next && <Button text={next.title} route={`/${next.path}`} id="prev" icon={<FontAwesomeIcon icon={faAngleRight} />} iconRight />}
            </div>
        </>
    )
}
