import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import './App.scss'

import Layout from './components/hoc/Layout'

import Main from './pages/Main'
import List from './pages/List'

import { Subscribe } from 'unstated'
import { AppContainer } from './providers/containers'

class App extends Component {
    render() {
        return (
            <Subscribe to={[ AppContainer ]}>
            { (app) => (
                <div className='App'>

                    <Layout>

                        <Switch>
                            <Route exact path='/' component={ Main } />
                            <Route exact path='/list' component={ List } />
                            <Redirect to='/'/>
                        </Switch>

                    </Layout>

                </div>
            ) }
            </Subscribe>
        )
    }
}

export default withRouter(App)