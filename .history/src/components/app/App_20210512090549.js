import React from 'react'
import './App.css'
import Banner from '../banner/Banner'
import { Route, Switch } from 'react-router'

const App = () => {
    return (
        <div className="app container">
            <h1>Test app <span style={{ fontWeight: 'lighter' }}> made with </span> &#10084;</h1>
            <Switch>
                <Route path="/">
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


const Docs = () => <h1>Docs</h1>;
const Testnet = () => <h1>Testnet</h1>;
const Error = () => <h1>404-Error</h1>;