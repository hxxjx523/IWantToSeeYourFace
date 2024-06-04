// import "../css/all.css";
import styles from "../css/End.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import End from '../json/GoodStudentCouncil.json'

export default function GoodStudentCouncil(){

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showContainer, setShowContainer] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyPress = (event) => {
            const { key } = event;

            if (key === 'Enter' || key === ' ' || key === 'ArrowRight') {
                setCurrentIndex(prevIndex => {
                    const newIndex = Math.min(prevIndex + 1, End.length - 1);
                    if (newIndex === End.length - 1) {
                        setShowContainer(false);
                    }
                    return newIndex;
                });
            } else if (key === 'ArrowLeft') {
                setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [navigate]);

    const getNextDialogue = () => {
        const nextDialogue = End[currentIndex];
        return {
            name: nextDialogue.name,
            text: nextDialogue.text,
            img: nextDialogue.img,
            window: nextDialogue.window
        };
    };

    return (
        <div>
            { !showContainer ? (<div className={styles.GoodStudentCouncil}>
                <div className={styles.endingTitle}><p style={{fontFamily: "ChosunGs"}}>END(2/9) - GOOD STUDENT COUNCIL</p></div>
                <div className={styles.endingComment}><p style={{fontFamily: "ChosunGs"}}>모든 건 적당히 하는 것이 좋다</p></div>
            </div>) : 
            (<div className={styles.container1}>
                <img src={getNextDialogue().img} className={styles.kimyeojuImg} />
                <img src={getNextDialogue().window} className={styles.dialogueWindow1} />
                <div className={styles.nameAndDialogue}>
                    <div className={styles.name}>{getNextDialogue().name}</div>
                    <div className={styles.dialogue}>{getNextDialogue().text}</div>
                </div>
            </div>)}
        </div>
    );
} 