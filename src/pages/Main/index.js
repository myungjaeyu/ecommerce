import React, { Component } from 'react'

import './index.scss'

import MainContent from './internal/Section/MainContent'
import MainSubContent from './internal/Section/MainSubContent'

import ListContent from '../../components/ListContent/ListContent'

import Layout from '../../components/hoc/Layout'

export default class extends Component {
    render() {
        return (
            <Layout modal={{ 
                type : 'notice',
                options : {
                    header : 'Modal Header',
                    content : 'Modal Test Modal Test Modal Test Modal Test Modal Test Modal Test'
                }
            }}>
                <div className='Main'>

                    <MainContent />
                    <MainSubContent />

                    <ListContent />

                </div>
            </Layout>
        )
    }

}