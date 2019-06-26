import React from 'react'

import SelectRating from '../../../components/SelectRating/SelectRating'

export default ({ rating, onRating }) => (
    <div className='ItemReviewForm'>

        <div className='ItemReviewForm__header'>

            <h2>
                <span>상품은 어떠셨나요?</span>
                <SelectRating rating={ rating } onRating={ onRating }/>
            </h2>

            <div>

                <button className='erer__btn erer__btn-basic'>사진 업로드</button>
                <button className='erer__btn erer__btn-basic'>리뷰 등록</button>

            </div>

        </div>

        <textarea placeholder='리뷰를 남겨주세요.'></textarea>

    </div>
)