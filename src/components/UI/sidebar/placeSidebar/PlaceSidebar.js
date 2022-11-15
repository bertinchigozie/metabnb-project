import React from 'react'
import {MdOutlineTune} from 'react-icons/md'
import { Auxilliary as Aux } from '../../../../hoc/Auxilliary/Auxilliary'
import Backdrop from '../../backdrop/Backdrop'
import classes from './PlaceSidebar.module.css'

const PlaceSidebar = (props) => {
  return (
    <Aux>
        <Backdrop show={props.show} hide={props.hidePlaces}/>
          <div className={classes.sidebar} style={{transform: props.show? 'translateX(0)': 'translateX(-100vw)', opacity: props.show?"1": '0', zIndex:props.show?"300":'-300'}} onClick={props.hidePlaces}>
          <div className={classes.place__linksBox}>
           <div className={classes.sidebar}>
                  <ul className={classes.place__links}>
                    <li className={classes.navlinks__item}><a href='#restuarant' rel='noreferrer'>Resturant</a></li>
                    <li className={classes.navlinks__item}><a href='#cottage' rel='noreferrer'>Cottage</a></li>
                    <li className={classes.navlinks__item}><a href='#castle' rel='noreferrer'>Castle</a></li>
                    <li className={classes.navlinks__item}><a href='#fantastCity' rel='noreferrer'>fantast city</a></li>
                    <li className={classes.navlinks__item}><a href='#beach' rel='noreferrer'>beach</a></li>
                    <li className={classes.navlinks__item}><a href='#cabins' rel='noreferrer'>Cabins</a></li>
                    <li className={classes.navlinks__item}><a href='#off-grid' rel='noreferrer'>Off-grid</a></li>
                    <li className={classes.navlinks__item}><a href='#farm' rel='noreferrer'>Farm</a></li>
                   
                    <div className={classes.location}>
                    <p>Location</p>
                    <MdOutlineTune/>
                  </div>
                  </ul>
                  </div>
                </div>
            </div>
        
    </Aux>
  )
}

export default PlaceSidebar