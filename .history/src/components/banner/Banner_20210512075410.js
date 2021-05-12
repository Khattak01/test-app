import React from 'react'
import classes from './Banner.module.css'

import Box from '../../UI/box/Box'

const Banner = () => {

    return (
        <Box className={classes.banner}>
            <h1>Test App</h1>
            <button className={classes.banner__btn}>Button</button>
        </Box>
    )
}

export default Banner
