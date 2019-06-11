import React from 'react'

import SelectOption from '../../../components/SelectOption/SelectOption'
import SelectQuantity from '../../../components/SelectQuantity/SelectQuantity'

export default ({ id, name, price }) => (
    <div className='ItemForm'>

        <h1>{ name }</h1>

        <p className='ItemForm__price'>₩{ price }</p>

        <div className='ItemForm__form'>

            <SelectOption name='Type' options={[ 'A', 'B', 'C' ]}/>

            <SelectQuantity name='Quantity' />

        </div>

        <button className='Item__btn erer__btn erer__btn-black'>카트 담기</button>

    </div>
)