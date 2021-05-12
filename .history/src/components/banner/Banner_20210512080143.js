import React from 'react'
import classes from './Banner.module.css'

import Box from '../../UI/box/Box'

const Banner = () => {

    return (
        <Box className={classes.banner}>
            {/* <h1>Test App</h1>
            <button className={classes.banner__btn}>Button</button> */}
            <Box className={classes.banner__top}></Box>
            <div className={classes.banner__center}></div>
            <Box className={classes.banner__bottom}></Box>
        </Box>
    )
}

export default Banner
