import React from 'react'
import { Button, Example, GeneratedDom, JsonDirective } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export const Component = ({
    name = 'Component name',
    prev = null,
    next = null,
    data,
    children
}) => {
    return (
        <>
            <h1 className="mb-3">{name}</h1>

            {data.description}

            {data.json_example &&
                <Example
                    formInputs={data.json_example} />
            }
            <JsonDirective
                json_string={data.json_directive}
                above_text={data.json_above_text}
                below_text={data.json_below_text}
            />

            <GeneratedDom
                dom={data.dom}
                above_text={data.dom_above_text}
                below_text={data.dom_below_text}
            />

            {children}

            <div className="d-flex justify-content-end gap-4">
                {prev && <Button text={prev.title} route={`/${prev.path}`} id="prev" icon={<FontAwesomeIcon icon={faAngleLeft} />} iconLeft />}
                {next && <Button text={next.title} route={`/${next.path}`} id="prev" icon={<FontAwesomeIcon icon={faAngleRight} />} iconRight />}
            </div>
        </>
    )
}
