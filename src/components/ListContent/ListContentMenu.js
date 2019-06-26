import React from 'react'

import './ListContentMenu.scss'

import SelectPopover from '../SelectPopover/SelectPopover'
import SelectButtons from '../SelectButtons/SelectButtons'

export default () => (
    <section className='ListContentMenu'>

        <div className='erer__row'>

            <div className='ListContentMenu__wrapper'>

                <SelectButtons />

                <SelectPopover />

            </div>

        </div>

    </section>
)