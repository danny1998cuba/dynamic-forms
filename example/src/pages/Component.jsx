import React from 'react'
import { Button, GeneratedDom, JsonDirective } from '../components'

export const Component = ({
    name = 'Component name',
    description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quas minus ipsam accusamus est corporis',

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
                <Button />
                <Button />
            </div>
        </>
    )
}
