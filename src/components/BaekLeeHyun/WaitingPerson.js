// import "../css/all.css";
import styles from "../css/goodEnd.module.css";
import { useEffect, useState } from "react";

import End from '../json/BLHselect2-2.json'

function WaitingPerson(){

    const [showText, setShowText] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleKeyPress = (event) => {
            const { key } = event;

            if (key === 'Enter' || key === ' ' || key === 'ArrowRight') {
                setCurrentIndex(prevIndex => {
                    const newIndex = Math.min(prevIndex + 1, End.length - 1);
                    setShowText(true); // 대사를 표시
                    return newIndex;
                });
            } else if (key === 'ArrowLeft') {
                setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
                setShowText(true); // 대사를 표시
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const getNextDialogue = () => {
        const nextDialogue = End[currentIndex];
        return { text: nextDialogue.text };
    };
    
    return (
        <div>
            <div className={styles.background}>
                {/* <div className={styles.endingTitle}><p>END(2/9) - GoodStudentCouncil</p></div> */}
                {showText && <div className={styles.endingComment}><p>{getNextDialogue().text}</p></div>}
            </div>
        </div>
    );
}

export default WaitingPerson