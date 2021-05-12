import React from 'react'
import classes from './SocialIcoms.module.css'

import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import { IconButton } from '@material-ui/core';

const iconsArray = [TwitterIcon, GitHubIcon, FacebookIcon, InstagramIcon, EmailIcon]
const iconStyle = {
    color:'#fafafa',
    fontSize:'24px'
}
const SocialIcons = () => {
    return (
        <div className={classes.box}>
            {iconsArray.map(Icon => <IconButton><Icon /></IconButton>)}
        </div>
    )
}

export default SocialIcons
