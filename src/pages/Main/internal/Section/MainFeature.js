import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ icon, caption }) => (
    <div className='MainFeature erer__col-3'>

        <p>
            <FontAwesomeIcon icon={ icon } />
        </p>

        <h2>{ caption }</h2>

    </div>
)