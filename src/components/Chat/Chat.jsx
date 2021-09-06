import React, { useEffect } from "react";
import io from 'socket.io-client';
import { Redirect } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addUsers } from "../../store/users-reducer";
import { addMessage, removeMessage } from "../../store/messages-reducer";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Messages from "../MessagesList/MessagesList";
import UserList from "../UserList/UserList";

import styles from './Chat.module.css';

let socket;

const Chat = () => {
    const dispatch = useDispatch();
    const [messageImage, setMessageImage] = useState('');
    const [messageText, setMessageText] = useState('');
    const [fileName, setFileName] = useState('');
    const userName = useSelector(state => state.user.user.name);
    const userPhoto = useSelector(state => state.user.user.photo);

    useEffect(() => {
        socket = io('https://protected-shore-62049.herokuapp.com/');

        socket.emit('newUser', { userName, userPhoto });

        return () => {
            socket.disconnect(true);            
        }
    }, []);

    useEffect(() => {
        socket.on('usersInChat', users => {
            dispatch(addUsers(users));
        });

        socket.on('newMessage', message => {
            dispatch(addMessage(message));
        });

        socket.on('removeMessage', id => {
            dispatch(removeMessage(id));
        });
    }, []);

    const sendMessage = (e) => {
        if (messageText || messageImage) {
            const message = {
                id: Date.now(),
                messageText,
                messageImage
            };

        socket.emit('sendMessage', message);

        setMessageText('');
        setMessageImage('');
        setFileName(''); 
        }
    };

    const remove = id => {
        socket.emit('remove', id);
    };

    return (
        <div className={styles.main}>
            {
                (sessionStorage.getItem('name') !== userName)
                ? <Redirect to='/' />
                : <>
                        <UserList />
                        <div className={styles.wrap}>
                            <Header />
                            <Messages remove={remove}/>
                            <Footer
                                setMessageImage={setMessageImage}
                                messageText={messageText}
                                setMessageText={setMessageText}
                                sendMessage={sendMessage}
                                fileName={fileName}
                                setFileName={setFileName}
                            />
                        </div>
                    </>                   
            }
        </div>
    );
};

export default Chat;