import "../css/all.css";
import styles from "../css/Dialogue.module.css";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Route from '../json/Route.json'; 

export default function Route2() {
    const [showImage, setShowImage] = useState(true);
    const [showButtons, setShowButtons] = useState(false); 
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const [showContainer2, setShowContainer2] = useState(false);
    const navigate = useNavigate();

   
    useEffect(() => {
        if (showContainer2) {
            const timeout = setTimeout(() => {
                setShowImage(false);
                setTimeout(() => {
                    setShowButtons(true);
                }, 100);
            }, 3000); 
            
            return () => clearTimeout(timeout);
        }
    }, [showContainer2]);

    useEffect(() => {
        const handleKeyPress = (event) => {
            const { key } = event;

            if (key === 'Enter' || key === ' ' || key === 'ArrowRight') {
                setCurrentIndex(prevIndex => {
                    const newIndex = Math.min(prevIndex + 1, Route.length - 1);
                    if (newIndex === Route.length - 1) {
                        setShowContainer2(true);
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
        const nextDialogue = Route[currentIndex];
        return {
            name: nextDialogue.name,
            text: nextDialogue.text,
            img: nextDialogue.img,
            window: nextDialogue.window
        };
    };

    const handleButtonClick = (event) => {

        const btnValue = event.target.value
        console.log(btnValue)
        
        if(btnValue==="select1"){
            navigate("/Route3_1")
        }else{
            navigate("/waitingPersonEND")
        }
    };

    return (
        <>
            {!showContainer2 ? (
                <div className={`${styles.container1} ${isExiting ? styles.fadeOut : ''}`}>
                    <img src={getNextDialogue().img} className={styles.kimyeojuImg} />
                    <img src={getNextDialogue().window} className={styles.dialogueWindow1} />
                    <div className={styles.nameAndDialogue}>
                        <div className={styles.name}>{getNextDialogue().name}</div>
                        <div className={styles.dialogue}>{getNextDialogue().text}</div>
                    </div>
                </div>
            ) : (
                <div className={styles.container2}>
                    <img src="./images/Baekleehyun_silhouette.png" className={styles.silhouette} alt="실루엣" />

                    <div className={styles.selectImgDiv}>
                        {showImage && (
                            <img
                                src="./images/optionImg.png"
                                className={`${styles.selectImg} ${showImage ? 'show' : ''}`}
                                alt="선택지 발생"
                            />
                        )}
                    </div>

                    {showButtons && (
                        <div className={styles.selectButtons}>
                            <button className={styles.selectButton} onClick={handleButtonClick} value={"select1"}>
                                <p>기다린다</p>
                            </button>
                            <button className={styles.selectButton} onClick={handleButtonClick} value={"select2"}>
                                <p>기다리지 않는다</p>
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}