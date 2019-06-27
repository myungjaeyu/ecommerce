import React, { Component } from 'react'

import './index.scss'

import ItemImage from './internal/ItemImage'
import ItemForm from './internal/ItemForm'
import ItemContent from './internal/ItemContent'
import ItemReview from './internal/ItemReview'

import ListContentMenu from '../../components/ListContent/ListContentMenu'
import ListContent from '../../components/ListContent/ListContent'

import Layout from '../../components/hoc/Layout'

export default class extends Component {

    state = {
        showFormNode : false,
        reviewFormRating : 5
    }

    handleFormNode = () => this.setState(({ showFormNode }) => ({ showFormNode : !showFormNode }))
    handlePushCart = () => console.log('handlePushCart - ', this.props.match.params)
    handleRating = (_, rating) => this.setState({ reviewFormRating : rating })

    render() {

        const { id } = this.props.match.params
        const { isMobileSize } = this.props

        return (
            <Layout>
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

                    <ItemReview 
                        data={ [
                            {
                                id : '1',
                                name : 'Nicktest123',
                                rating : 5,
                                date : '2019-06-26',
                                images : [
                                    'http://www.stylenanda.com/2017/upload2/jsp180524-109sooa(1).jpg',
                                    'http://www.stylenanda.com/2017/upload2/jsp180524-109sooa(4).jpg'

                                ],
                                content : `카레가 살짝매콤합니다~아이랑드시는분 참고하세요\n부드럽고 감칠맛나는 카레맛이 최근에 먹어본것중 최고였고\n고로케는 에어프라이기에 10분정도 돌려서 같이먹으니 바삭하고 너무나맛있었어요~재구매각입니다!!!`
                            }
                        ]}
                        rating={ this.state.reviewFormRating }
                        onRating={ this.handleRating }
                    />

                    <ListContentMenu />
                    <ListContent />

                </div>
            </Layout>
        )
    }

}