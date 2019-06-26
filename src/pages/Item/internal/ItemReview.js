import React from 'react'

import ItemReviewForm from './ItemReviewForm'
import ItemReviewItem from './ItemReviewItem'

export default ({ data, rating, onRating }) => (
    <section className='ItemReview'>

        <div className='erer__container'>

            <h1>상품 리뷰</h1>
    
            <h4>상품에 관계없는 글, 양도, 광고성, 욕설, 비방, 도배 등의 글은 예고 없이 블라인드 처리되거나 삭제됩니다.</h4>

            <ItemReviewForm rating={ rating } onRating={ onRating } />

            { data.map((e, i) => <ItemReviewItem key={ i } { ...e } />) }

        </div>

    </section>
)