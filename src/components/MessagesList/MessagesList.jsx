import React, { useState } from "react";
import { useSelector } from "react-redux";

import Message from "../Message/Message";

import styles from './MessagesList.module.css';

const Messages = ({ remove }) => {
    const messages = useSelector(state => state.messages.messages);
    const [display, setDisplay] = useState('none');
    const [id, setId] = useState('');

    return (
        <div className={styles.messages}>
            {
                messages.length
                ? messages.map(message => 
                    <Message
                        key={message.id}
                        message={message}
                        setDisplay={setDisplay}
                        setId={setId}
                        remove={remove}
                    />)
                : <p>Сообщений нет</p>
            }
            
            <div
                style={{display: display}}
                className={styles.modal}
                onClick={() => {setDisplay('none')}}
            >
                <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                    <p>Удалить сообщение?</p>

                    <div className={styles.buttonsGroup}>
                        <button onClick={() => {remove(id); setDisplay('none')}}>Подтвердить</button>

                        <button onClick={() => setDisplay('none')}>Отмена</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;