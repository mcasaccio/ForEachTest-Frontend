import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

import { FormEmployeeScreen } from '../components/FormEmployeeScreen'
import { RegistroViajes } from '../components/RegistroViajes'


export const AppRouter = () => {

    return (
        <Router>
            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                    <Link to="/" className="navbar-brand">forEach App</Link>

                    <div className="navbar-nav">
                        <Link to="/" className="nav-link">Enviar datos</Link>
                        <Link to="/viajes" className="nav-link">Viajes realizados</Link>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={FormEmployeeScreen} />
                    <Route exact path="/viajes" component={RegistroViajes} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}