import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./css/Dialogue.module.css";

function Dialogue({ routeData, chapter, select1, select2, end, goodEnd }) {
    const [confirmation, setConfirmation] = useState(false);

    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                const response = await fetch('/status');
                if (response.ok) {
                    const data = await response.json();
                    if (data.bothChecked) {
                        setConfirmation(true);
                        clearInterval(interval); 
                    }
                } else {
                    console.error('상태 확인 실패');
                }
            } catch (error) {
                console.error('에러 -> ', error);
            }
        }, 3000); 

        return () => clearInterval(interval); 
    }, []);

    async function sendSign() {
        try {
            const response = await fetch('/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: 'sign' })
            });

            if (response.ok) {
                console.log('전송 성공');
            } else {
                console.error('전송 실패');
            }
        } catch (error) {
            console.error('에러 -> ', error);
        }
    }


    const [showImage, setShowImage] = useState(true);
    const [showButtons, setShowButtons] = useState(false); 
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const [showContainer2, setShowContainer2] = useState(false); // 추가된 상태
    const [bothChecked, setBothChecked] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const getRouteFromQuery = () => {
        const params = new URLSearchParams(location.search);
        return params.get('route');
    };

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

            if (!bothChecked && routeData[currentIndex].text === "어??? 민들레?!!") {
                return; // 아무것도 안하도록 이벤트 기본 동작 방지
            } else if (key === 'Enter' || key === ' ' || key === 'ArrowRight') {
                setCurrentIndex(prevIndex => {
                    const newIndex = Math.min(prevIndex + 1, routeData.length - 1);
                    if (routeData[newIndex]?.select) {
                        setShowContainer2(true);
                    } else if (newIndex === routeData.length - 1) {
                        const route = getRouteFromQuery();
                        navigate(`/${chapter}?route=${route}`);
                    }
                    return newIndex;
                });
            } else if (key === 'ArrowLeft') {
                setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
            }
        };

        // 이벤트 핸들러 등록
        document.addEventListener('keydown', handleKeyPress);

        // 컴포넌트가 언마운트될 때 이벤트 핸들러 제거
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [navigate, routeData, chapter]);

    const getNextDialogue = () => {
        const nextDialogue = routeData[currentIndex];
        if (nextDialogue.text === "어??? 민들레?!!" && !bothChecked) {
            return {
                name: "",
                text: "핸드폰을 봐주세요!",
                img: "",
                window: "./images/dialogueWindow/Nomal_dialogueWindow.png",
                background: ""
            };
        } else {
            return {
                name: nextDialogue.name,
                text: nextDialogue.text,
                img: nextDialogue.img,
                window: nextDialogue.window,
                background: nextDialogue.background
            };
        }
    };

    const { name, text, img, window, background } = getNextDialogue();

    const handleChoice = (event) => {
        const { value } = event.target;
        const currentRoute = location.pathname;
        const lastThreeChars = currentRoute.slice(-3);

        if (value === "select1") {
            setShowContainer2(false);
            setShowButtons(false);
            setShowImage(true);
            setCurrentIndex(prevIndex => prevIndex + 1); // 'select:true' 다음으로 이동
            if (lastThreeChars === "End") {
                navigate(goodEnd); // Good Ending으로 이동
            }
        } else if (value === "select2") {
            navigate(end); // end에 해당하는 주소로 이동
        }
    };


    useEffect(() => {
        if (text === "(핸드폰을 보자)") {
            sendSign();
        }
    }, [text]);

    return (
        <>
            {!showContainer2 ? (
                <div className={`${styles.container1} ${isExiting ? styles.fadeOut : ''}`}>
                    <img src={background} className={styles.background} alt="Background" />
                    <img src={img} className={styles.kimyeojuImg} alt="Character" />
                    <img src={window} className={styles.dialogueWindow1} alt="Dialogue Window" />
                    <div className={styles.nameAndDialogue}>
                        <div className={styles.name}>{name}</div>
                        <div className={styles.dialogue}>{text}</div>
                    </div>
                </div>
            ) : (

                <div className={styles.container2}>
                    <img src="./images/Baekleehyun/Baekleehyun_silhouette.png" className={styles.silhouette} alt="실루엣" />

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
                            <button className={styles.selectButton} onClick={handleChoice} value={"select1"}>
                                <p>{select1}</p>
                            </button>
                            <button className={styles.selectButton} onClick={handleChoice} value={"select2"}>
                                <p>{select2}</p>
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default Dialogue;