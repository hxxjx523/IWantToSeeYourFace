import "./css/all.css";
import styles from "./css/story2.module.css"
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import baekLeeHyunRoute from './json/baekLeeHyunRoute.json'; // JSON 파일 경로에 맞게 수정




export default function BaekLeeHyunRoute(){
    const [showImage, setShowImage] = useState(true);
    const [showButtons, setShowButtons] = useState(false); 
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        
        const timeout = setTimeout(() => {
            setShowImage(false);
            setShowButtons(true);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

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

            <div className={styles.container}>
                <img src={getNextDialogue().img} className={styles.kimyeojuImg}/>
                <img src={getNextDialogue().window} className={styles.dialogueWindow1}/>
                <div className={styles.nameAndDialogue}>
                    <div className={styles.name}>{getNextDialogue().name}</div>
                    <div className={styles.dialogue}>{getNextDialogue().text}</div>
                </div>
                    
            </div>
    );

}