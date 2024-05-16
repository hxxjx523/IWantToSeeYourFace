import "./css/all.css";
import styles from "./css/story2.module.css"
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";





export default function BaekLeeHyunRoute(){
    const [showImage, setShowImage] = useState(true);
    const [showButtons, setShowButtons] = useState(false); 

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowImage(false);
            setShowButtons(true);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    const handleButtonClick = () => {
    };

    return (
            <div className={styles.container2}>
                <img src="./images/Baekleehyun_silhouette.png" className={styles.silhouette} alt="실루엣" />

                <div className={styles.selectImgDiv}>
                    {showImage && <img src="./images/optionImg.png" 
                    className={`${styles.selectImg} ${showImage ? "show" : ""}`} alt="선택지 발생" />}  
                </div>

                {showButtons && (
                    <>
                        <button className={styles.selectButton} onClick={handleButtonClick}>
                            <img src="./images/title_startBtn.png" alt="시작 버튼" />
                        </button>
                        <button className={styles.selectButton} onClick={handleButtonClick}>
                            <img src="./images/title_startBtn.png" alt="시작 버튼" />
                        </button>
                    </>
                )}
            </div>
    );

}