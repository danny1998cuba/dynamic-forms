import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

export const description = <>
    <p>A simple separator for each section in the form.</p>
</>

export const json_directive = `{
    type: "header",
    text: "Header Text",
    class?: "...optional-classes"
}`

export const json_example = [
    {
        type: 'text',
        label: 'Input 1',
        placeholder: 'Input 1',
        name: 'name1'
    },
    {
        type: "header",
        text: "Header Text"
    },
    {
        type: 'text',
        label: 'Input 2',
        placeholder: 'Input 2',
        name: 'name2'
    }

]

export const json_above_text = <>
    <p>In order to add a new section, you must add an element to the objects array with the <code className='mx-2'>type</code> attribute setted as <em>header</em>.</p>
</>
export const json_below_text = <></>

export const dom = `<h3 className='section-header ...optional-classes'>
    Header Text
</h3>`
export const dom_above_text = <>
    <p>
        An <code className="mx-2">h3</code> tag will be rendered into de DOM of your form with the <code className="mx-2">className</code>
        <em>section-header</em>. You will be able to add your own styles through this access class.
    </p>
</>
export const dom_below_text = <></>

export const extra_content = <></>