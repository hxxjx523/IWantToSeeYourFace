import "../css/all.css";
import styles from "../css/Dialogue.module.css";

import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import baekLeeHyunRoute from '../json/baekLeeHyunRoute2.json'; // JSON 파일 경로에 맞게 수정

export default function BaekLeeHyunRoute2() {
    const [showImage, setShowImage] = useState(true);
    const [showButtons, setShowButtons] = useState(false); 
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const [showContainer2, setShowContainer2] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const getRouteFromQuery = () => {
        const params = new URLSearchParams(location.search);
        return params.get('route');
    };

    useEffect(() => {
        if (showContainer2) {
            const timeout = setTimeout(() => {
                setShowImage(false);
                setTimeout(() => {
                    setShowButtons(true);
                }, 100); 
            }, 3000); 
            
            // 컴포넌트가 언마운트될 때 timeout을 클리어하여 메모리 누수를 방지
            return () => clearTimeout(timeout);
        }
    }, [showContainer2]);
    
    useEffect(() => {
        const handleKeyPress = (event) => {
            const { key } = event;
            
            if (key === 'Enter' || key === ' ' || key === 'ArrowRight') {
                setCurrentIndex(prevIndex => {
                    const newIndex = Math.min(prevIndex + 1, baekLeeHyunRoute.length - 1);
                    if (baekLeeHyunRoute[newIndex]?.select) {
                        setShowContainer2(true);
                    }else if (newIndex === baekLeeHyunRoute.length - 1) {
                        const route = getRouteFromQuery();
                        navigate(`/chapter3?route=${route}`)
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
        const nextDialogue = baekLeeHyunRoute[currentIndex];
        return {
            name: nextDialogue.name,
            text: nextDialogue.text,
            img: nextDialogue.img,
            window: nextDialogue.window
        };
    };

    const handleButtonClick = (event) => {
        const btnValue = event.target.value;
        console.log(btnValue);

        if (btnValue === "select1") {
            // '기다린다'를 선택했을 때
            setShowContainer2(false);
            setShowButtons(false);
            setShowImage(true);
            setCurrentIndex(prevIndex => prevIndex + 1); // 'select:true' 다음으로 이동
        } else {
            // '기다리지 않는다'를 선택했을 때
            navigate("/waitingPerson");
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