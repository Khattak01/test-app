import React from 'react'
import classes from './Banner.module.css'

import Box from '../../UI/box/Box'
import SocialIcons from '../social-icons/SocialIcons'
import { Link } from '@material-ui/core'
import { useHistory } from "react-router-dom";

const Banner = () => {

    const history = useHistory();
    return (
        <Box className={classes.banner}>
            {/* <h1>Test App</h1>
            <button className={classes.banner__btn}>Button</button> */}
            <div className={classes.banner__top}>
                <div className={classes.banner__links}>
                    <Link onClick={() => history.push('/docs')}>Docs</Link>
                    <Link onClick={() => history.push('/apps.manta.network')}>Testnet</Link>
                </div>
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
            <div className={classes.banner__center}><SocialIcons /></div>
            <div className={classes.banner__bottom}>
                <div><h2>Financial times </h2>Logo</div>
                <div><h2>Yahoo finance </h2>Logo</div>
                <div><h2>Coindesk </h2>Logo</div>
                <div><h2>Chain news </h2>Logo</div>
                <div><h2>The block </h2>Logo</div>
                <div><h2>Coin telegraph  </h2>Logo</div>
            </div>
        </Box>
    )
}

export default Banner
