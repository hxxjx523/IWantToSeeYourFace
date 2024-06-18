import styles from "./css/Dialogue.module.css";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function EndingDialogue({ routeData, onDialogueEnd }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyPress = (event) => {
            const { key } = event;

            if (key === 'Enter' || key === ' ' || key === 'ArrowRight') {
                setCurrentIndex(prevIndex => {
                    const newIndex = Math.min(prevIndex + 1, routeData.length - 1);
                    if (newIndex === routeData.length - 1) {
                        onDialogueEnd(); // 마지막 대화에 도달하면 onDialogueEnd 호출
                    }
                    return newIndex;
                });
            } else if (key === 'ArrowLeft') {
                setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [routeData, onDialogueEnd]);

    const getNextDialogue = () => {
        const nextDialogue = routeData[currentIndex] || {};
        return {
            name: nextDialogue.name || '',
            text: nextDialogue.text || '',
            img: nextDialogue.img || '',
            window: nextDialogue.window || '',
            background: nextDialogue.background || ''
        };
    };

    const { name, text, img, window, background } = getNextDialogue();

    return (
        <div className={`${styles.container1} ${isExiting ? styles.fadeOut : ''}`}>
            <img src={background} className={styles.background}/>
            <img src={img} className={styles.kimyeojuImg}/>
            <img src={window} className={styles.dialogueWindow1}/>
            <div className={styles.nameAndDialogue}>
                <div className={styles.name}>{name}</div>
                <div className={styles.dialogue}>{text}</div>
                <button className={styles.next}></button>
            </div>
        </div>
    );
}

export default EndingDialogue;