import { useDispatch, useSelector } from 'react-redux';

import { toggleActive } from '../../store/users-reducer';

import styles from './UserList.module.css';

const UserList = () => {
    const userList = useSelector(state => state.users.userList);
    const isActive = useSelector(state => state.users.isActive);
    const dispatch = useDispatch();

    return (
        <div className={isActive ? `${styles.userList} ${styles.userListActive}` : styles.userList}>
            <span className={styles.listTitle}>Пользователи</span>

            {userList.map(user => 
                <div className={styles.userListItem} key={user.id}>
                    <img className={styles.userPhoto} src={user.userPhoto} alt="Фото пользователя" />

                    <span>{user.userName}</span>
                </div>
            )}

            <span onClick={() => dispatch(toggleActive())} className={styles.userListClose}></span>
        </div>
    );
};

export default UserList;