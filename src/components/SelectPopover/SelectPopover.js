import React, { Component } from 'react'

import './SelectPopover.scss'

export default class extends Component {

    state = { 
        isPopover: false
    }

    handleIsVisiblePopover = () => {

        this.setState(({ isPopover }) => ({ isPopover : !isPopover }))

    }

    paintPopover() {

        return (
            <div className='SelectPopover__popover'>

                <button onClick={ this.handleIsVisiblePopover }>가격 높은 순</button>
                <button onClick={ this.handleIsVisiblePopover }>가격 낮은 순</button>

            </div>
        )

    }

    render() {
        return (
            <div className='SelectPopover'>

                <button onClick={ this.handleIsVisiblePopover }>가격 높은 순</button>

                { this.state.isPopover && this.paintPopover() }

            </div>
        )
    }

} 