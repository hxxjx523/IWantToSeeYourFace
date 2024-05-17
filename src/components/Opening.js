import "./css/all.css";
import styles from "./css/story1.module.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import opening from './json/opening.json'; // JSON 파일 경로에 맞게 수정
export default function Opening(){

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowRight') {
                setCurrentIndex(prevIndex => {
                    if (prevIndex + 1 >= opening.length) {
                        setIsExiting(true);
                        setTimeout(() => navigate('/chapter1'), 500); // 500ms는 CSS 애니메이션 시간과 일치
                        return prevIndex; // 마지막 페이지에서 인덱스를 증가시키지 않음
                    }
                    return prevIndex + 1;
                });
            } else if (event.key === 'ArrowLeft') {
                setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
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
            img: nextDialogue.img,
            window: nextDialogue.window
        };
    };

    return(
        <div className={`${styles.container} ${isExiting ? styles.fadeOut : ''}`}>
                <img src={getNextDialogue().img} className={styles.kimyeojuImg}/>
                <img src={getNextDialogue().window} className={styles.dialogueWindow1}/>
                <div className={styles.nameAndDialogue}>
                <div className={styles.name}>{getNextDialogue().name}</div>
                <div className={styles.dialogue}>{getNextDialogue().text}</div>
        </div>
                
        </div>
    )
}