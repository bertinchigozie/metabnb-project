import React from 'react'
import {useState} from 'react'
import {Link } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import {Auxilliary as Aux} from '../../../hoc/Auxilliary/Auxilliary';
import Adventure from './adventure/Adventure';
import  icon from '../../../assets/images/nav-icon.png';
import img2 from '../../../assets/images/image 3.png';
import img1 from '../../../assets/images/image 4.png';
import img3 from '../../../assets/images/image 6.png';
import img4 from '../../../assets/images/image 5.png'
import img5 from '../../../assets/images/image 7.png'
import img6 from '../../../assets/images/image 8.png'
import img7 from '../../../assets/images/image 9.png'
import mb from '../../../assets/images/MBToken.png'
import meta from  '../../../assets/images/Metamask.png'
import open from '../../../assets/images/Opensea.png';
import classes from './Home.module.css'
import Footer from './footer/Footer';
import Modal from '../../UI/modal/Modal';
import Sidebar from '../../UI/sidebar/Sidebar';

function Home() {
  const [show, setShow] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const showHandler =()=>{
      setShow(true)
  }
  const hideModal =()=>{
     setShow(false)
  }
  const sidebarHandler = ()=>{
    const openSide = showSidebar
    setShowSidebar(!openSide )
  }
  const hideSidebar = ()=>{
    setShowSidebar(false)
  }
  return (
    
    <Aux>
      <Modal show={show} modalClose={hideModal}/>
      <Sidebar showSide={showSidebar} closeSidebar={hideSidebar}/>

      <div className={classes.main__header}>
        <header className={classes.header}>
          <div className={classes.navbar}>
            <nav >
              <div className={classes.nav__items}>
                <div className={classes.nav__logo}>
                  <div>
                     <img src={icon} alt="icon" className={classes.icon}/>
                   
                    <p className={classes.logo}>Metabnb</p>
                  </div>
                </div>
                <div >
                  <ul className={classes.navlinks}>
                    <Link to='/' className={classes.navlinks__item}>
                    Home</Link>
                    <Link to='/placeToStay' className={classes.navlinks__item}>
                    Place to stay</Link>
                    <Link to='/' className={classes.navlinks__item}>
                    NFTS</Link>
                    <Link to='/' className={classes.navlinks__item}>
                    Community</Link>
                    {/* <li className={classes.navlinks__item}><a to='/placeToStay' rel='noreferrer'>Place to stay</a></li> */}
                    {/* <li className={classes.navlinks__item}><a href='#home' rel='noreferrer'>Home</a></li> */}
                    {/* <li className={classes.navlinks__item}><a href='#nfts' rel='noreferrer'>NFTS</a></li>
                    <li className={classes.navlinks__item}><a href='#community' rel='noreferrer'>Community</a></li> */}
                   
                  </ul>
                </div>
        <div className={classes.menu}><div className={classes.bar} onClick={sidebarHandler}><AiOutlineMenu/></div></div>
                <button className={classes.nav__button} onClick={showHandler}>
                <div>connect wallet</div>
                </button>
              </div>
            </nav>
          </div>
          <div className={classes.header__section_box}>
          <div className={classes.header__section}>
            <div>
              <div>
                <h1 className={classes.heading__primary}>Rent a <span>Place</span> away from <span>Home </span> in the <span>Metaverse</span></h1>
                <p className={classes.heading__paragragph}>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <div className={classes.search__section}>
                  <input type='search'  className={classes.search} placeholder='search for location'/>
                <button className={classes.search__button}>Search</button>

                </div>
              </div>
            </div>
            
            <div className={classes.img__mainbox}>
              <div className={classes.img__box1}>
                <img src={img1} alt='' className={classes.img__1}/>
                <img src={img3} alt='' className={classes.img__2}/>
              </div>
              <div className={classes.img__box2}>
                <img src={img2} alt='' className={classes.img__3}/>
              <img src={img4} alt='' className={classes.img__4}/>
              </div>
            </div>
          </div>
          </div>
        </header>
      </div>
      <div className={classes.features}>
        <div>
          <img src={mb} alt='' className={classes.feature__icon}/>
        </div>
        <div>
          <img src={meta} alt='' className={classes.feature__icon}/>
        </div>
        <div>
          <img src={open} alt=''className={classes.feature__icon}/>
        </div>

      </div>
        <Adventure/>
        <div className={classes.discover__section}>
        <div className={classes.discover}>
         <div>
         <div className={classes.discover__text}>
            <h1>Metabnb NFTS</h1>
          </div>
          <div>
            <p>
              Discover our NFT gift cards collection. Loyal customers get amazing gift cards which are traded as NFTS. These NFTS gives our customer access to loads of our exclusive services
            </p>
          </div>
          <button className={classes.discover__btn}>
            Learn more
          </button>
           
         </div>
         <div className={classes.discover__img}>
          <img src={img5} alt='' className={classes.img5}/>
          <img src={img6} alt='' className={classes.img6}/>
          <img src={img7} alt='' className={classes.img7}/>
         </div>
         </div>
        </div>
        <div>
          <Footer/>
        </div>
    </Aux>
  )
}

export default Home