import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleActive } from "../../store/users-reducer";

import styles from './Header.module.css';

const Header = () => {
    const userName = useSelector(state => state.user.user.name);
    const userPhoto = useSelector(state => state.user.user.photo);
    const dispatch = useDispatch();

    return (
        <div className={styles.header}>
            <span onClick={() => dispatch(toggleActive())} className={styles.usersPic}></span>
            
            <div className={styles.userInfo}>
                <img src={userPhoto} alt="Фото пользователя" />
                <span>{userName}</span>
            </div>        
        </div> 
    );
};

export default Header;