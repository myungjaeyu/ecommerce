import React, { Component } from 'react'

import './index.scss'

import ListHedaer from './internal/ListHeader'
import ListContentMenu from '../../components/ListContent/ListContentMenu'
import ListContent from '../../components/ListContent/ListContent'

import Layout from '../../components/hoc/Layout'

export default class extends Component {
    render() {

        return (
            <Layout>
                <div className='List'>

                    { <ListHedaer /> }
                    { <ListContentMenu /> }
                    <ListContent />

                </div>
            </Layout>
        )
    }

}