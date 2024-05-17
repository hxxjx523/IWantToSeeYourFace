import "./css/all.css";
import styles from "./css/story2.module.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import baekLeeHyunRoute from './json/baekLeeHyunRoute.json'; // JSON 파일 경로에 맞게 수정




export default function BaekLeeHyunRoute(){
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
            if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowRight') {
                setCurrentIndex(prevIndex => {
                    if (prevIndex + 1 >= baekLeeHyunRoute.length) {
                        return prevIndex; // 마지막 인덱스를 넘지 않도록 방지
                    }

                    if (baekLeeHyunRoute[prevIndex].name === 'chapter2' && !isReturning) {
                        navigate('/chapter2'); // /chapter2 경로로 이동
                        setIsReturning(true); // 플래그 설정
                        return prevIndex; // 다음 대화로 넘어가지 않음
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
    }, [isReturning, navigate]);

    useEffect(() => {
        // chapter2에서 돌아왔을 때 상태 초기화
        if (isReturning) {
            const nextIndex = baekLeeHyunRoute.findIndex((dialogue, index) => 
                index > currentIndex && dialogue.name !== 'chapter2'
            );
            if (nextIndex !== -1) {
                setCurrentIndex(nextIndex);
            }
            setIsReturning(false); // 플래그 초기화
        }
    }, [isReturning, currentIndex]);

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