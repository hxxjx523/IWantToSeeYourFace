import "../css/all.css";
import styles from "../css/story2.module.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import baekLeeHyunRoute from '../json/baekLeeHyunRoute1.json'; // JSON 파일 경로에 맞게 수정




export default function BaekLeeHyunRoute1(){
    const [showImage, setShowImage] = useState(true);
    const [showButtons, setShowButtons] = useState(false); 
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const [isReturning, setIsReturning] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        
        const timeout = setTimeout(() => {
            setShowImage(false);
            setShowButtons(true);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const handleKeyPress = (event) => {
            const { key } = event;
    
            if (key === 'Enter' || key === ' ' || key === 'ArrowRight') {
                setCurrentIndex(prevIndex => {
                    const newIndex = Math.min(prevIndex + 1, baekLeeHyunRoute.length - 1);
                    if (newIndex === baekLeeHyunRoute.length - 1) {
                        navigate('/chapter2');
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
    }, [isReturning, navigate]);

    const getNextDialogue = () => {
        const nextDialogue = baekLeeHyunRoute[currentIndex];
        return {
            name: nextDialogue.name,
            text: nextDialogue.text,
            img: nextDialogue.img,
            window: nextDialogue.window
        };
    };

    const handleButtonClick = () => {
    };

    

    return (
            // <div className={styles.container2}>
            //     <img src="./images/Baekleehyun_silhouette.png" className={styles.silhouette} alt="실루엣" />

            //     <div className={styles.selectImgDiv}>
            //         {showImage && <img src="./images/optionImg.png" 
            //         className={`${styles.selectImg} ${showImage ? "show" : ""}`} alt="선택지 발생" />}  
            //     </div>

            //     {showButtons && (
            //         <>
            //             <button className={styles.selectButton} onClick={handleButtonClick}>
            //                 <img src="./images/title_startBtn.png" alt="시작 버튼" />
            //             </button>
            //             <button className={styles.selectButton} onClick={handleButtonClick}>
            //                 <img src="./images/title_startBtn.png" alt="시작 버튼" />
            //             </button>
            //         </>
            //     )}
            // </div>

            <div className={`${styles.container} ${isExiting ? styles.fadeOut : ''}`}>
                <img src={getNextDialogue().img} className={styles.kimyeojuImg}/>
                <img src={getNextDialogue().window} className={styles.dialogueWindow1}/>
                <div className={styles.nameAndDialogue}>
                    <div className={styles.name}>{getNextDialogue().name}</div>
                    <div className={styles.dialogue}>{getNextDialogue().text}</div>
                </div>
                    
            </div>
    );

}