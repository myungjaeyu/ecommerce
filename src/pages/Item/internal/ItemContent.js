import React from 'react'

import ItemContentItem from './ItemContentItem'

export default ({ data }) => (
    <section className='ItemContent'>

        <div className='erer__container'>

            <div className='erer__row'>

                { data.map((e, i) => <ItemContentItem
                    key={ i }
                    image={ e.image }
                    title={ e.title }
                    description={ e.description }
                />)}                      

            </div>

        </div>

    </section>
)