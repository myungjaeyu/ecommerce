import React, { Component } from 'react'

import './index.scss'

import ItemImage from './internal/ItemImage'
import ItemForm from './internal/ItemForm'
import ItemContent from './internal/ItemContent'

import List from '../List'

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

                    <div className='Item__header erer__row'>

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

                <ItemContent data={
                    [
                        {
                            image : 'http://www.inthe-uni.com/web/product/medium/201712/989_shop1_728089.jpg',
                            title : '선택 상품에 대한 물품 상세 설명입니다!',
                            description : `선택 상품 물품 상세 설명입니다! 선택 상품 물품 상세 설명입니다!\n이곳은 테스트 선택 상품 물품 상세 설명 내용 구간입니다.\n물품에 대한 세부적인 설명을 남길 수 있는 단락이죠.`
                        },
                        {
                            image : 'http://via.placeholder.com/700x800',
                            title : '선택 상품에 대한 물품 상세 설명입니다!',
                            description : `선택 상품 물품 상세 설명입니다! 선택 상품 물품 상세 설명입니다!\n이곳은 테스트 선택 상품 물품 상세 설명 내용 구간입니다.\n물품에 대한 세부적인 설명을 남길 수 있는 단락이죠.`
                        },
                        {
                            image : 'http://www.stylenanda.com/2017/3ce/180531-SIMPLY(3).jpg',
                            title : '선택 상품에 대한 물품 상세 설명입니다!',
                            description : `선택 상품 물품 상세 설명입니다! 선택 상품 물품 상세 설명입니다!\n이곳은 테스트 선택 상품 물품 상세 설명 내용 구간입니다.\n물품에 대한 세부적인 설명을 남길 수 있는 단락이죠.`
                        },
                        {
                            image : 'http://www.stylenanda.com/2017/3ce/180531-VELVET(1).jpg',
                            title : '선택 상품에 대한 물품 상세 설명입니다!',
                            description : `선택 상품 물품 상세 설명입니다! 선택 상품 물품 상세 설명입니다!\n이곳은 테스트 선택 상품 물품 상세 설명 내용 구간입니다.\n물품에 대한 세부적인 설명을 남길 수 있는 단락이죠.`
                        },
                        {
                            image : 'http://www.stylenanda.com/2017/3ce/180531-SIMPLY(1).jpg',
                            title : '선택 상품에 대한 물품 상세 설명입니다!',
                            description : `선택 상품 물품 상세 설명입니다! 선택 상품 물품 상세 설명입니다!\n이곳은 테스트 선택 상품 물품 상세 설명 내용 구간입니다.\n물품에 대한 세부적인 설명을 남길 수 있는 단락이죠.`
                        },
                        {
                            image : 'http://www.stylenanda.com/2017/3ce/180531-VELVET(3).jpg',
                            title : '선택 상품에 대한 물품 상세 설명입니다!',
                            description : `선택 상품 물품 상세 설명입니다! 선택 상품 물품 상세 설명입니다!\n이곳은 테스트 선택 상품 물품 상세 설명 내용 구간입니다.\n물품에 대한 세부적인 설명을 남길 수 있는 단락이죠.`
                        }
                    ]
                }/>

                <List hideHeader={ true } />

            </div>
        )
    }

}