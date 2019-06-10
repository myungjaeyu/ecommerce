import React, { Component } from 'react'

import './SelectPopover.scss'

export default class extends Component {

    state = { 
        show: false
    }

    handleIsVisiblePopover = () => {

        this.setState(({ show }) => ({ show : !show }))

    }

    paintPopover(show) {

        const IS_SHOW_CLASSNAME = show ? 'SelectPopover__Open' : 'SelectPopover__Close'

        return (
            <div className={ 'SelectPopover__popover ' + IS_SHOW_CLASSNAME }>

                <button onClick={ this.handleIsVisiblePopover }>가격 높은 순</button>
                <button onClick={ this.handleIsVisiblePopover }>가격 낮은 순</button>

            </div>
        )

    }

    render() {
        return (
            <div className='SelectPopover'>

                <button onClick={ this.handleIsVisiblePopover }>가격 높은 순</button>

                { this.paintPopover(this.state.show) }

            </div>
        )
    }

} 