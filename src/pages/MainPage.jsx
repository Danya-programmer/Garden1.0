import React from 'react';
import Header from "../conponents/UI/Header/Header";
import classes from "../styles/MainPage.module.css"
import background from "../img/background4.jpg";
import {NavLink} from "react-router-dom";
const MainPage = () => {

    return (
        <div className={classes.mainPage}>
            <img className={classes.backgroundImg} src={background} alt='error'/>

            <Header className={classes.header}/>
            <main className={classes.main}>
                <div className={classes.mainPart}>
                    <p className={classes.textOfMainPage}>Найти растение своей мечты!</p>
                    <NavLink to='/gardenCatalog' className={classes.buttonOfMainPage}><p className={classes.textInButtonOfMainPage}>В каталог</p> </NavLink></div>
            </main>
        </div>
    );
};

export default MainPage;