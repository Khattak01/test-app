import React from 'react'
import classes from './Banner.module.css'

import Box from '../../UI/box/Box'

const Banner = () => {

    return (
        <Box className={classes.banner}>
            {/* <h1>Test App</h1>
            <button className={classes.banner__btn}>Button</button> */}
            <div className={classes.banner__top}>
                <div className={classes.text_box}>
                    <h4 className="heading">Manta_Network:-$</h4>
                    <p className='text'>The first privacy-preserving protocol built for</p>
                </div>
                <div className={classes.text_box}>
                    <h4 className="heading">Manta_Network:-$</h4>
                    <p style={{ color: '#1ba4f3' }}>SC |</p>
                </div>
                <div className={classes.text_box}>
                    <h4 className="heading">Manta_Network:-$</h4>
                    <p className='text'>function(request) &nbsp;&nbsp;(<span style={{ color: '#002bd9', fontSize: '18px', fontWeight: 500 }}>Technical resources</span>)</p>
                </div>
            </div>
            <div className={classes.banner__center}></div>
            <div className={classes.banner__bottom}>
                <div><h2>Financial times Logo</h2></div>
                <div><h2>Yahoo finance Logo</h2></div>
                <div><h2>Coindesk Logo</h2></div>
                <div><h2>Chain news Logo</h2></div>
                <div><h2>The block Logo</h2></div>
                <div><h2>Coin telegraph  Logo</h2></div>
            </div>
        </Box>
    )
}

export default Banner
