import React from 'react'
import {GrFormClose} from 'react-icons/gr'
import {BsChevronRight} from 'react-icons/bs'
import { Auxilliary as Aux } from '../../../hoc/Auxilliary/Auxilliary'
import classes from './Modal.module.css'
import meta from '../../../assets/images/image 66.png'
import wallet from '../../../assets/images/image 69.png'
import Backdrop from '../backdrop/Backdrop'

const Modal = (props) => {
  return (
    <Aux>
   <Backdrop show={props.show} hide={props.modalClose}/>
   <div className={classes.Modal} style={{transform:props.show?'translateY(0)' : 'translateY(-100vh)', opacity: props.show?"1": '0', zIndex:props.show?"500":'-500'}}>
        <div>
            <div className={classes.line}>
            <div className={classes.connect__section}>
                <div className={classes.connect}><h1>Connect Wallet</h1></div>
                <div onClick={props.modalClose}><GrFormClose className={classes.close} /></div>
            </div>
            </div>
            <div className={classes.choose__section}>
                <p className={classes.choose__text}>Choose your preferred wallet</p>
                <div className={classes.flexbox__active}>
                    <div className={classes.flex}>
                    <img src={meta} alt='' className={classes.img}/>
                        <p className={classes.text}>Metamask</p>
                    </div>
                    <BsChevronRight className={classes.icon}/>
                </div>
                <div className={classes.flexbox}>
                    <div className={classes.flex}>
                    <img src={wallet} alt='' className={classes.img}/>
                        <p className={classes.text}>WalletConnect</p>
                    </div>
                    <BsChevronRight className={classes.icon}/>

                </div>
            </div>
        </div>
    </div>
    </Aux>
  )
}

export default Modal