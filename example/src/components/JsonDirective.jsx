import React from 'react'
import Highlight from 'react-highlight'

export const JsonDirective = ({
    json_string = `{'example': 'example'}`,
    above_text,
    below_text
}) => {
    return (
        <section id="json-directive">
            <h2>Json directive</h2>

            {above_text}

            <Highlight className='json w-75'>
                {json_string}
            </Highlight>


            {below_text}
        </section>
    )
}
