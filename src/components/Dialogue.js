import React from 'react';
import styles from "./css/Dialogue.module.css";

function Dialogue({ name, text, img, window, background, isExiting }){
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