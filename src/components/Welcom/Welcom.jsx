import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';

import { setPhoto, setUserName } from "../../store/user-reducer";
import { getName } from "../../utils/getName";

import styles from './Welcom.module.css';

const Welcom = () => {
    const dispatch = useDispatch();
    const name  = getName(); 

    useEffect(() => {
        dispatch(setUserName(name));
        dispatch(setPhoto());

        sessionStorage.setItem('name', name);
    });

    return (
        <div className={styles.welcom}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Войдите в чат для начала общения
                </h1>
                <NavLink to='chat'>
                    <button className={styles.button}>Войти</button>
                </NavLink>
            </div> 
        </div>
    );
};

export default Welcom;