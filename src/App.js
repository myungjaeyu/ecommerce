import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import './App.scss'

import Layout from './components/hoc/Layout'

import Main from './pages/Main'
import List from './pages/List'
import Item from './pages/Item'

import Login from './pages/Login'
import Signup from './pages/Signup'

import { Subscribe } from 'unstated'
import { AppContainer } from './providers/containers'

class App extends Component {

    state = {
        isMobileSize : false
    }

    componentDidMount() {
        this.handleResize()

        window.addEventListener('resize', this.handleResize)

    }

    componentWillMount() {
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {

        window.innerWidth < 768 ? 
        !this.state.isMobileSize && this.setState(() => ({ isMobileSize : true })) 
        : 
        this.state.isMobileSize && this.setState(() => ({ isMobileSize : false }))

    }
    
    render() {
        return (
            <Subscribe to={[ AppContainer ]}>
            { (app) => (
                <div className='App'>

                    <Layout>

                        <Switch>
                            <Route exact path='/' component={ Main } />
                            <Route exact path='/list' component={ List } />
                            <Route exact path='/item/:id' render={ (props) => <Item { ...props } isMobileSize={ this.state.isMobileSize } /> } />
                            <Route exact path='/login' component={ Login } />
                            <Route exact path='/signup' component={ Signup } />
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