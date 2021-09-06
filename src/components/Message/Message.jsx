import styles from './Message.module.css';

const Message = ({ message, setDisplay, setId, remove }) => {

    const removeMessage = () => {
        if (message.messageText !== 'Сообщение удалено'
            && message.author.userName === sessionStorage.getItem('name')) {
                setId(message.id);
                setDisplay('flex');
        }
    };

    return (
        <div className={styles.wrap}>
            <div className={styles.userInfo}>
                <img
                    className={styles.userPhoto}
                    src={message.author.userPhoto}
                    alt="Фото пользователя"
                />
            </div>
            {
                (message.messageText)
                ? (
                    <div onClick={removeMessage} className={styles.message}>
                        {message.messageText}
                    </div>
                )
                : null
            }
            {
                (message.messageImage)
                ? (
                    <div className={styles.imageWrap}>
                        <img 
                            src={message.messageImage}
                            className={styles.messageImage} alt=""
                        />
                        {
                            message.author.userName === sessionStorage.getItem('name')
                            ? <span onClick={() => {remove(message.id)}} className={styles.imageClose}></span>
                            : null
                        }
                    </div>
                )
                : null
            }
  </div>
    );
};

export default Message;