import React from 'react'
import Highlight from 'react-highlight'

export const GeneratedDom = ({
    dom = `<div>Example</div>`,
    above_text,
    below_text
}) => {
    return (
        <section id="dom">
            <h2>Generated DOM</h2>
            {above_text}

            <Highlight className='html w-75'>
                {dom}
            </Highlight>

            {below_text}

        </section >
    )
}
