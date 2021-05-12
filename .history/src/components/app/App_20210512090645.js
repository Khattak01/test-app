import React from 'react'
import './App.css'
import Banner from '../banner/Banner'
import { Route, Switch } from 'react-router'

const App = () => {
    return (
        <div className="app container">
            <h1>Test app <span style={{ fontWeight: 'lighter' }}> made with </span> &#10084;</h1><br />
            <Switch>
                <Route exact path="/">
                    <Banner />
                </Route>
                <Route path="/docs">
                    <Docs />
                </Route>
                <Route path="/testnet">
                    <Testnet />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
        </div>
    )
}

export default App


const Docs = () => <h2>Docs</h2>;
const Testnet = () => <h2>Testnet</h2>;
const Error = () => <h2>404-Error</h2>;