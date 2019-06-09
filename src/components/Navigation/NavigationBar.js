import React from 'react'

import './NavigationBar.scss'

import NavigationItems from './NavigationItems'

export default () => (
    <header className='NavigationBar'>

        <div>
            Title
        </div>

        <nav>
            <NavigationItems />
        </nav>

        <div>
            Test
        </div>

    </header>
)