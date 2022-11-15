import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {MdOutlineTune} from 'react-icons/md'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import Sidebar from '../../UI/sidebar/Sidebar'
import { Auxilliary as Aux } from '../../../hoc/Auxilliary/Auxilliary'
import img1 from '../../../assets/images/Frame-20.png'
import img2 from '../../../assets/images/Frame-1.png'
import img3 from '../../../assets/images/Frame-2.png'
import img4 from '../../../assets/images/Frame-3.png'
import img5 from '../../../assets/images/Frame-4.png'
import img6 from '../../../assets/images/Frame-6.png'
import img7 from '../../../assets/images/Frame-7.png'
import img8 from '../../../assets/images/Frame-8.png'
import img9 from '../../../assets/images/Frame-16.png'
import img10 from '../../../assets/images/Frame-15.png'
import img11 from '../../../assets/images/Frame-14.png'
import img12 from '../../../assets/images/Frame-13.png'
import img13 from '../../../assets/images/Frame-11.png'
import img14 from '../../../assets/images/Frame-12.png'
import img15 from '../../../assets/images/Frame-10.png'
import img16 from '../../../assets/images/Frame-9.png'
import star from '../../../assets/images/Star 2.png'
import icon from '../../../assets/images/nav-icon.png'
import classes from './Place.module.css'
import Footer from '../home/footer/Footer'
import Modal from '../../UI/modal/Modal'
import PlaceSidebar from '../../UI/sidebar/placeSidebar/PlaceSidebar'

const Place = (props) => {
    
    const [show, setShow] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const [showPlaces, setShowPlaces] = useState(false)
    
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

      const placesHandler = ()=>{
        const places = showPlaces
        setShowPlaces(!places)
      }

      const hidePlaces = ()=>{
        setShowPlaces(false)
      }

  return (
<Aux>
    <Modal show={show}  modalClose={hideModal}/>
    <Sidebar showSide={showSidebar} closeSidebar={hideSidebar}/>
    <PlaceSidebar show={showPlaces} hidePlaces={hidePlaces}/>
    <div className={classes.place}>
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
                  <ul className={classes.place__links}>
                  <Link to='/' className={classes.place__links__item}>
                    Home</Link>
                    <Link to='/placeToStay' className={classes.place__links__item}>
                    Place to stay</Link>
                    <Link to='/' className={classes.place__links__item}>
                    NFTS</Link>
                    <Link to='/' className={classes.place__links__item}>
                    Community</Link>
                    {/* <li className={classes.navlinks__item}><a href='home' rel='noreferrer'>Home</a></li>
                    <li className={classes.navlinks__item}><a href='placeToStay' rel='noreferrer'>Place to stay</a></li>
                    <li className={classes.navlinks__item}><a href='nfts' rel='noreferrer'>NFTS</a></li>
                    <li className={classes.navlinks__item}><a href='community' rel='noreferrer'>Community</a></li> */}
                   
                  </ul>
                </div>
                <div className={classes.menu}><div className={classes.bar} onClick={sidebarHandler}><AiOutlineMenu/></div></div>
                <button className={classes.nav__button} onClick={showHandler}>
                <div>connect wallet</div>
                </button>
              </div>
            </nav>
          </div>

          <div className={classes.place__linksBox}>
           <div className={classes.dots}>
           <div className={classes.flex} onClick={placesHandler}><BiDotsHorizontalRounded/></div>
           </div>
                  <ul className={classes.place__links}>
                    <li className={classes.navlinks__item}><a href='restuarant' rel='noreferrer'>Resturant</a></li>
                    <li className={classes.navlinks__item}><a href='cottage' rel='noreferrer'>Cottage</a></li>
                    <li className={classes.navlinks__item}><a href='castle' rel='noreferrer'>Castle</a></li>
                    <li className={classes.navlinks__item}><a href='fantastCity' rel='noreferrer'>fantast city</a></li>
                    <li className={classes.navlinks__item}><a href='beach' rel='noreferrer'>beach</a></li>
                    <li className={classes.navlinks__item}><a href='cabins' rel='noreferrer'>Cabins</a></li>
                    <li className={classes.navlinks__item}><a href='off-grid' rel='noreferrer'>Off-grid</a></li>
                    <li className={classes.navlinks__item}><a href='farm' rel='noreferrer'>Farm</a></li>
                   
                    <div className={classes.location}>
                    <p>Location</p>
                    <MdOutlineTune/>
                  </div>
                  </ul>
                  
                </div>

    <section  className={classes.adventure__section}>
    
<div className={classes.adventure}>
<div className={classes.grid}>

    <div className={classes.card}>
        <div>
            <img src={img5} alt='' className={classes.img}/>
        </div>
        <div className={classes.description}>
            <p>Desert King</p>
            <p>1MBT per night</p>
        </div>
        <div className={classes.duration}>
            <p>2345km away</p>
            <p>available for two weeks stay</p>
        </div>
        <div className={classes.star}>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
        </div>
    </div>
    <div className={classes.card}>
        <div>
            <img src={img6} alt='' className={classes.img}/>
        </div>
        <div className={classes.description}>
            <p>Desert King</p>
            <p>1MBT per night</p>
        </div>
        <div className={classes.duration}>
            <p>2345km away</p>
            <p>available for two weeks stay</p>
        </div>
        <div className={classes.star}>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
        </div>
    </div>
    <div className={classes.card}>
        <div>
            <img src={img7} alt='' className={classes.img}/>
        </div>
        <div className={classes.description}>
            <p>Desert King</p>
            <p>1MBT per night</p>
        </div>
        <div className={classes.duration}>
            <p>2345km away</p>
            <p>available for two weeks stay</p>
        </div>
        <div className={classes.star}>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
        </div>
    </div>
    <div className={classes.card}>
        <div>
            <img src={img8} alt='' className={classes.img}/>
        </div>
        <div className={classes.description}>
            <p>Desert King</p>
            <p>1MBT per night</p>
        </div>
        <div className={classes.duration}>
            <p>2345km away</p>
            <p>available for two weeks stay</p>
        </div>
        <div className={classes.star}>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
        </div>
    </div>
    <div className={classes.card}>
        <div>
            <img src={img1} alt='' className={classes.img}/>
        </div>
        <div className={classes.description}>
            <p>Desert King</p>
            <p>1MBT per night</p>
        </div>
        <div className={classes.duration}>
            <p>2345km away</p>
            <p>available for two weeks stay</p>
        </div>
        <div className={classes.star}>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
        </div>
    </div>
    <div className={classes.card}>
        <div>
            <img src={img2} alt='' className={classes.img}/>
        </div>
        <div className={classes.description}>
            <p>Desert King</p>
            <p>1MBT per night</p>
        </div>
        <div className={classes.duration}>
            <p>2345km away</p>
            <p>available for two weeks stay</p>
        </div>
        <div className={classes.star}>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
        </div>
    </div>
    <div className={classes.card}>
        <div >
            <img src={img3} alt='' className={classes.img}/>
        </div>
        <div className={classes.description}>
            <p>Desert King</p>
            <p>1MBT per night</p>
        </div>
        <div className={classes.duration}>
            <p>2345km away</p>
            <p>available for two weeks stay</p>
        </div>
        <div className={classes.star}>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
        </div>
    </div>
    <div className={classes.card}>
        <div>
            <img src={img4} alt='' className={classes.img}/>
        </div>
        <div className={classes.description}>
            <p>Desert King</p>
            <p>1MBT per night</p>
        </div>
        <div className={classes.duration}>
            <p>2345km away</p>
            <p>available for two weeks stay</p>
        </div>
        <div className={classes.star}>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
        </div>
    </div>
    <div className={classes.card}>
        <div>
            <img src={img9} alt='' className={classes.img}/>
        </div>
        <div className={classes.description}>
            <p>Desert King</p>
            <p>1MBT per night</p>
        </div>
        <div className={classes.duration}>
            <p>2345km away</p>
            <p>available for two weeks stay</p>
        </div>
        <div className={classes.star}>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
        </div>
    </div><div className={classes.card}>
        <div>
            <img src={img10} alt='' className={classes.img}/>
        </div>
        <div className={classes.description}>
            <p>Desert King</p>
            <p>1MBT per night</p>
        </div>
        <div className={classes.duration}>
            <p>2345km away</p>
            <p>available for two weeks stay</p>
        </div>
        <div className={classes.star}>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
        </div>
    </div><div className={classes.card}>
        <div>
            <img src={img11} alt='' className={classes.img}/>
        </div>
        <div className={classes.description}>
            <p>Desert King</p>
            <p>1MBT per night</p>
        </div>
        <div className={classes.duration}>
            <p>2345km away</p>
            <p>available for two weeks stay</p>
        </div>
        <div className={classes.star}>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
        </div>
    </div><div className={classes.card}>
        <div>
            <img src={img12} alt='' className={classes.img}/>
        </div>
        <div className={classes.description}>
            <p>Desert King</p>
            <p>1MBT per night</p>
        </div>
        <div className={classes.duration}>
            <p>2345km away</p>
            <p>available for two weeks stay</p>
        </div>
        <div className={classes.star}>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
        </div>
    </div><div className={classes.card}>
        <div>
            <img src={img13} alt='' className={classes.img}/>
        </div>
        <div className={classes.description}>
            <p>Desert King</p>
            <p>1MBT per night</p>
        </div>
        <div className={classes.duration}>
            <p>2345km away</p>
            <p>available for two weeks stay</p>
        </div>
        <div className={classes.star}>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
        </div>
    </div><div className={classes.card}>
        <div>
            <img src={img14} alt='' className={classes.img}/>
        </div>
        <div className={classes.description}>
            <p>Desert King</p>
            <p>1MBT per night</p>
        </div>
        <div className={classes.duration}>
            <p>2345km away</p>
            <p>available for two weeks stay</p>
        </div>
        <div className={classes.star}>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
        </div>
    </div><div className={classes.card}>
        <div>
            <img src={img15} alt='' className={classes.img}/>
        </div>
        <div className={classes.description}>
            <p>Desert King</p>
            <p>1MBT per night</p>
        </div>
        <div className={classes.duration}>
            <p>2345km away</p>
            <p>available for two weeks stay</p>
        </div>
        <div className={classes.star}>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
        </div>
    </div><div className={classes.card}>
        <div>
            <img src={img16} alt='' className={classes.img}/>
        </div>
        <div className={classes.description}>
            <p>Desert King</p>
            <p>1MBT per night</p>
        </div>
        <div className={classes.duration}>
            <p>2345km away</p>
            <p>available for two weeks stay</p>
        </div>
        <div className={classes.star}>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
        </div>
    </div>
</div>
</div>
</section>
</div>
<Footer/>
</Aux>
    )
}

export default Place