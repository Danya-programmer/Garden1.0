import React from 'react';
import Header from "../conponents/UI/Header/Header";
import classes from "../styles/AboutUs.module.css";
import photo1 from "../img/1-min.jpg"
import photo2 from "../img/2-min.jpg"
import photo3 from "../img/3.jpg"
const AboutUs = () => {
    return (
        <div className={classes.AboutUsBody}>
            <Header/>
            <section>
                <p className={classes.title}>Растения - золото!</p>
                <div className={classes.AboutUs}>
                    <img className={classes.photo} src={photo1} alt='не работает'/>

                    <img className={classes.photo2} src={photo2} alt='не работает'/>

                    <img className={classes.photo} src={photo3} alt='не работает'/>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;