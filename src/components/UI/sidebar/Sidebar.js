import React from 'react'
import {Link} from 'react-router-dom'
import { Auxilliary as Aux} from '../../../hoc/Auxilliary/Auxilliary'
import classes from './Sidebar.module.css'

const Sidebar = (props) => {
  return (
<Aux>
    <div>
        <div>
            <div className={classes.sidebar} style={{transform: props.showSide? 'translateX(0)': 'translateX(-100vw)', opacity: props.showSide?"1": '0', zIndex:props.showSide?"500":'-500'}} onClick={props.closeSidebar}>
                <ul className={classes.navlinks}>
                    <Link to='/' className={classes.navlinks__item}>
                    Home</Link>
                    <Link to='/placeToStay' className={classes.navlinks__item}>
                    Place to stay</Link>
                    <Link to='/' className={classes.navlinks__item}>
                    NFTS</Link>
                    <Link to='/' className={classes.navlinks__item}>
                    Community</Link>
                   
                </ul>
                <button className={classes.nav__button} onClick={props.showModal}>
                <div>connect wallet</div>
                </button>
                
            </div>
        </div>
    </div>
</Aux>

  )


}

export default Sidebar