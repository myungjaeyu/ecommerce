import React from 'react'

import CartItem from './CartItem'

export default ({ onClosed, data }) => (
    <ul>

        { data.map((e, i) => <CartItem key={ i } onClosed={ onClosed } id={ e.id } image={ e.image } price={ e.price } >{ e.name }</CartItem> )}

    </ul>
)