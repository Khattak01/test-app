import React from 'react'
import classes from './Banner.module.css'

import Box from '../../UI/box/Box'

const Banner = () => {

    return (
        <Box className={classes.banner}>
            {/* <h1>Test App</h1>
            <button className={classes.banner__btn}>Button</button> */}
            <div className={classes.banner__top}>
                <h4 className="heading">Manta_Network:-$</h4>
                <p className='text'>The first privacy-preserving protocol built for</p>
            </div>
            <div className={classes.banner__center}></div>
            <div className={classes.banner__bottom}></div>
        </Box>
    )
}

export default Banner
