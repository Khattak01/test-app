import React from 'react'
import './App.css'
import Banner from '../banner/Banner'

const App = () => {
    return (
        <div className="app container">
            <h1>Test app <span style={{fontWeight:'lighter'}}> made with </span> &#10084;</h1>
            <Banner />
        </div>
    )
}

export default App
