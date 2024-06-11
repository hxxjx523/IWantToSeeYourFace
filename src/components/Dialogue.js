import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./css/Dialogue.module.css"; // Import your CSS module
import Pixel from './Pixel';

function Dialogue({ routeData, chapter, select1, select2, end, goodEnd, silhouette }) {
    const [showImage, setShowImage] = useState(true);
    const [showButtons, setShowButtons] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showContainer2, setShowContainer2] = useState(false);
    const [confirmation, setConfirmation] = useState(false);
    const [showPixel, setShowPixel] = useState(false);

    const currentIndexRef = useRef(currentIndex);
    currentIndexRef.current = currentIndex;

    const navigate = useNavigate();
    const location = useLocation();

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
                    console.error('Failed to check status');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const sendSign = async () => {
        try {
            const response = await fetch('/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: 'sign' })
            });

            if (response.ok) {
                console.log('Message sent successfully');
            } else {
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getRouteFromQuery = useCallback(() => {
        const params = new URLSearchParams(location.search);
        return params.get('route');
    }, [location]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowImage(false);
            setShowButtons(true);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    const advanceDialogue = useCallback(() => {
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
    }, [routeData, getRouteFromQuery, navigate, chapter]);

    const retreatDialogue = useCallback(() => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    }, []);

    useEffect(() => {
        const handleKeyPress = (event) => {
            const { key } = event;
            const currentDialogue = routeData[currentIndexRef.current];

            if (!confirmation && currentDialogue.text === "어??? 민들레?!!") return;

            if (key === 'Enter' || key === ' ' || key === 'ArrowRight') {
                advanceDialogue();
            } else if (key === 'ArrowLeft') {
                retreatDialogue();
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [advanceDialogue, retreatDialogue, confirmation]);

    const getNextDialogue = () => {
        const nextDialogue = routeData[currentIndex];
        if (nextDialogue.text === "어??? 민들레?!!" && !confirmation) {
            return {
                name: "",
                text: "",
                img: "",
                window: "",
                background: "./images/background/background_phoneGuide.png"
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

    //선택지 발생 이미지가 나오면 이미지는 숨기고 버튼이 보이게
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowImage(false);
            setShowButtons(true);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);


    //json의 text가 {픽셀이 지나가는 가는 효과}이면 픽셀 컴포넌트를 보여줌
    useEffect(() => {
        const currentDialogue = getNextDialogue();
        if (currentDialogue && currentDialogue.text === "{픽셀이 지나가는 가는 효과}") {
            console.log(currentDialogue.text)
            setShowPixel(true);
            const timer = setTimeout(() => {
                setShowPixel(false);
                advanceDialogue();
            }, 1000); 
            return () => clearTimeout(timer);
        }
    }, [currentIndex, routeData]);

    // 픽셀 지나가는 효과의 이미지를 가져오기 (뒤에 5글자 자름)
    const route = getRouteFromQuery();
    const lastThreeChars = route.slice(0, -5);

    let pixelImg = ""

    if(lastThreeChars === "baekLeeHyun"){
        pixelImg = lastThreeChars
    }else if(lastThreeChars === "doYoon"){
        pixelImg = lastThreeChars
    }else{
        pixelImg = lastThreeChars
    }


    //현재 루트의 뒤 3글자가 End
    const handleChoice = (event) => {
        const { value } = event.target;
        const currentRoute = location.pathname;
        const lastThreeChars = currentRoute.slice(-3);

        if (value === "select1") {
            setShowContainer2(false);
            setShowButtons(false);
            setShowImage(true);
            setCurrentIndex(prevIndex => prevIndex + 1);
            if (lastThreeChars === "End") {
                navigate(goodEnd);
            }
        } else if (value === "select2") {
            navigate(end);
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
                !showPixel ? (
                    <div className={styles.container1}>
                        <img src={background} className={styles.background}/>
                        <img src={img} className={styles.kimyeojuImg}/>
                        <img src={window} className={styles.dialogueWindow1}/>
                        <div className={styles.nameAndDialogue}>
                            <div className={styles.name}>{name}</div>
                            <div className={styles.dialogue}>{text}</div>
                            <button className={styles.next}></button>
                        </div>
                    </div>
                ):(  
                    
                    <Pixel pixelImg={pixelImg}/>
                )
            ) : (
                <div className={styles.container2}>
                    <img src={`./images/${silhouette}/${silhouette}_silhouette.png`} className={styles.silhouette}/>
                    <div className={styles.selectImgDiv}>
                        {showImage && (
                            <img
                                src="./images/optionImg.png"
                                className={`${styles.selectImg} ${showImage ? 'show' : ''}`}
                            />
                        )}
                    </div>
                    {showButtons && (
                        <div className={styles.selectButtons}>
                            <button className={styles.selectButton} onClick={handleChoice} value="select1">
                                <p>{select1}</p>
                            </button>
                            <button className={styles.selectButton} onClick={handleChoice} value="select2">
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
