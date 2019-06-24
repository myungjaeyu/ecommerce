import React, { Component } from 'react'

import './index.scss'

import ItemImage from './internal/ItemImage'
import ItemForm from './internal/ItemForm'

export default class extends Component {

    state = {
        showFormNode : false
    }

    handleFormNode = () => this.setState(({ showFormNode }) => ({ showFormNode : !showFormNode }))
    handlePushCart = () => console.log('handlePushCart - ', this.props.match.params)

    render() {

        const { id } = this.props.match.params
        const { isMobileSize } = this.props

        return (
            <div className='Item'>
                <div className='erer__container'>

                    <div className='erer__row'>

                        <div className='erer__col-7'>

                            <ItemImage 
                                image='http://swagger.kr/web/product/medium/201905/6ef454202d471789eefb7522499962e0.png'
                            />

                        </div>

                        <div className='erer__col-5'>

                            <ItemForm
                                id={ id }
                                name='SWAGGER 왁스 스웨거 헤어 스터너 왁스 - 크리미&소프트'
                                price='15,000'
                                showFormNode={ !isMobileSize || this.state.showFormNode }
                                onShow={ this.handleFormNode }
                                onPush={ this.handlePushCart }
                            />

                        </div>

                    </div>

                </div>

            </div>
        )
    }

}