import React from 'react'

import SelectOption from '../../../components/SelectOption/SelectOption'
import SelectQuantity from '../../../components/SelectQuantity/SelectQuantity'

export default ({ id, name, price, showFormNode, onShow, onPush }) => (
    <div className='ItemForm'>

        <h1>{ name }</h1>

        <p className='ItemForm__price'>₩{ price }</p>

        <div className='ItemForm__form__wrapper' onClick={ onShow } style={ { height : showFormNode ? '100%' : '0px'}}>

            <div className='ItemForm__form' onClick={ (e) => e.stopPropagation() }>

                <div
                    className='ItemForm__node' 
                    style={ { display : showFormNode ? 'block' : 'none' } }
                >

                    <SelectOption name='Type' options={[ 'A', 'B', 'C' ]}/>

                    <SelectQuantity name='Quantity' />

                </div>

                <button 
                    className='ItemForm__btn erer__btn erer__btn-black'
                    onClick={ showFormNode ? onPush : onShow }
                >
                    { showFormNode ? '카트 담기' : '상품 옵션 보기' }
                </button>

            </div>

        </div>

    </div>
)