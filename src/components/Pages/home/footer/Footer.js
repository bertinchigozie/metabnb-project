import React from 'react'
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
import { Auxilliary as Aux} from '../../../../hoc/Auxilliary/Auxilliary'
import classes from './Footer.module.css'
import icon from '../../../../assets/images/Vector (8).png'
const Footer = () => {
  return (
    <Aux>
        <div className={classes.footer__section}>
        <div className={classes.footer__container}>
        <div className={classes.footer__logoBox}>
            <div className={classes.footer__logo}>
                <img src={icon} alt=''/>
                <h1>Metabnb</h1>  
            </div>
            <div className={classes.footer__social} >
                <div><FaFacebookF /></div>
                <div><FaInstagram/></div>
                <div><FaTwitter/></div>
            </div>
            <div>
                &copy; 2022 Metabnb
            </div>
        </div>
        <div className={classes.footer__community}>
            <div className={classes.bold}><p>Community</p></div>
            <p>NFT</p>
            <p>Tokens</p>
            <p>Landlords</p>
            <p>Discord</p>
        </div>
        <div className={classes.footer__places}>
            <div className={classes.bold}><p>Places</p></div>
            <p>Castle</p>
            <p>Farms</p>
            <p>Beach</p>
            <p>Learn More</p>
        </div>
        <div className={classes.footer__about}>
            <div className={classes.bold}><p>About us</p></div>
            <p>Road map</p>
            <p>Creators</p>
            <p>Career</p>
            <p>Contact us</p>
        </div>
    </div>
    </div>
    </Aux>
  )
}

export default Footer