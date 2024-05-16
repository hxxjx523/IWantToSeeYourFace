import "./css/all.css";
import styles from "./css/story1.module.css"
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import opening from './json/opening.json'; // JSON 파일 경로에 맞게 수정
export default function Opening(){

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                setCurrentIndex(prevIndex => prevIndex + 1);
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const getNextDialogue = () => {
        const nextDialogue = opening[currentIndex];
        return {
            name: nextDialogue.name,
            text: nextDialogue.text,
            imgSrc: nextDialogue.img
        };
    };

    return(
        <div className={styles.container}>
                <img src={getNextDialogue().imgSrc} className={styles.kimyeojuImg}/>
                <img src="./images/Kimyeoju_dialogueWindow1.png" className={styles.dialogueWindow1}/>
                <div className={styles.nameAndDialogue}>
                <div className={styles.name}>{getNextDialogue().name}</div>
                <div className={styles.dialogue}>{getNextDialogue().text}</div>
        </div>
                
        </div>
    )
}