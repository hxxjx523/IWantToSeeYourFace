import React from 'react';
import styles from "./css/Dialogue.module.css";

function Dialogue({ name, text, img, window, background, isExiting }){
    async function sendSign(){
        try {
            const response = await fetch('/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: 'sign' })
            });

            if (response.ok) {
                console.log('전송선공');
            } else {
                console.error('전송실패');
            }
        } catch (error) {
            console.error('에러 -> ', error);
        }
    }

    if(text == "(핸드폰을 보자)"){
        sendSign();
    }

    return (
        <div className={`${styles.container1} ${isExiting ? styles.fadeOut : ''}`}>
            <img src={background} className={styles.background}/>
            <img src={img} className={styles.kimyeojuImg} />
            <img src={window} className={styles.dialogueWindow1} />
            <div className={styles.nameAndDialogue}>
                <div className={styles.name}>{name}</div>
                <div className={styles.dialogue}>{text}</div>
            </div>
        </div>
    );
};

export default Dialogue;