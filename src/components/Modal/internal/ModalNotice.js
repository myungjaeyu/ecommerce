import React, { Fragment } from 'react'


export default ({ header, content }) => (
    <Fragment>

        <h1>{ header }</h1>

        <p className='erer__text-sub'>{ content }</p>

    </Fragment>
)