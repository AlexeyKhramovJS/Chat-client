import React from "react";

import { convertBase64 } from '../../utils/convertBase64';

import styles from './Footer.module.css';

const Footer = ({ setMessageImage, messageText, setMessageText, sendMessage, fileName, setFileName }) => {
    
    const uploadImage = async (e) => {
        let file = e.target.files[0];
        
        setFileName(file.name);
        const base64 = await convertBase64(file);
        setMessageImage(base64);
    };

    return (
        <div className={styles.footer}>
            <input 
                type="text"
                placeholder='Введите сообщение...'
                value={messageText}
                onChange={e => {setMessageText(e.target.value)}}
                onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} 
            />
            <input 
                id="file-input"
                type="file"
                onChange={e => uploadImage(e)}
             />
             <span onClick={sendMessage} className={styles.send}></span>
            <label htmlFor="file-input"></label>
            <span>{fileName}</span>
        </div>
    );
};

export default Footer;