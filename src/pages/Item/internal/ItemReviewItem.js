import React from 'react'

import SelectRating from '../../../components/SelectRating/SelectRating'

export default ({ id, name, rating, date, images, content }) => (
    <article>

        <div className='erer__row'>

            <div className='ItemReviewItem__header erer__col-3'>

                <h3>{ name }</h3>

                <h4>{ date }</h4>

                <SelectRating rating={ rating } />

            </div>

            <div className='ItemReviewItem__content erer__col-7'>

                <h4>{ content }</h4>

                { images.map((e, i) => <img key={ i } src={ e } alt='' />) }
                
            </div>

        </div>

    </article>
)