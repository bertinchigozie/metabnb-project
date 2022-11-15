import React from 'react'
import { Auxilliary as Aux } from '../../../../hoc/Auxilliary/Auxilliary'
import classes from './Adventure.module.css'
import img1 from '../../../../assets/images/Frame-20.png'
import img2 from '../../../../assets/images/Frame-1.png'
import img3 from '../../../../assets/images/Frame-2.png'
import img4 from '../../../../assets/images/Frame-3.png'
import img5 from '../../../../assets/images/Frame-4.png'
import img6 from '../../../../assets/images/Frame-6.png'
import img7 from '../../../../assets/images/Frame-7.png'
import img8 from '../../../../assets/images/Frame-8.png'
import star from '../../../../assets/images/Star 2.png'

const Adventure = () => {
    
  return (
<Aux>
    <section  className={classes.adventure__section}>
    <div className={classes.secondary__heading}>
     <h1 >Inspiration for your next adventure</h1>
</div>
<div className={classes.adventure}>
<div className={classes.grid}>
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
</div>
</div>
</section>
</Aux>
    )
}

export default Adventure