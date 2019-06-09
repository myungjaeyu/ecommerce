import React, { Component, Fragment } from 'react'

import './SelectQuantity.scss'

export default class extends Component {

    state = {
        quantity : 1
    }

    addQuantity = () => this.setState(({ quantity }) => ({  quantity : quantity + 1 }))

    substractQuantity = () => {

        if (this.state.quantity > 1)
            this.setState(({ quantity }) => ({ quantity : quantity - 1 }))

    }

    onChangeHandler = event => {

        if (+event.target.value > 0) this.setState({ quantity : +event.target.value })

    }

    render() {
        return (
            <Fragment>

                <p>{ this.props.name }: </p>

                <div className='SelectQuantity'>

                    <button onClick={ this.substractQuantity }>-</button>

                    <input value={ this.state.quantity } onChange={ this.onChangeHandler } />

                    <button onClick={ this.addQuantity }>+</button>
    
                </div>

            </Fragment>
        )
    }

} 