import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import './App.scss'

import Main from './pages/Main'

import { Subscribe } from 'unstated'
import { AppContainer } from './providers/containers'

class App extends Component {
    render() {
        return (
            <Subscribe to={[ AppContainer ]}>
            { (app) => (
                <div className='App'>

                    <Switch>
                        <Route exact path='/' component={ Main } />
                        <Redirect to='/'/>
                    </Switch>

                </div>
            ) }
            </Subscribe>
        )
    }
}

export default withRouter(App)