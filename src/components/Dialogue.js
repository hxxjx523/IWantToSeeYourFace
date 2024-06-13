import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./css/Dialogue.module.css"; // Import your CSS module
import Pixel from './Pixel';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

function Dialogue({ routeData, chapter, select1, select2, end, goodEnd, silhouette }) {
    const [showImage, setShowImage] = useState(true);
    const [showButtons, setShowButtons] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showContainer2, setShowContainer2] = useState(false);
    const [confirmation, setConfirmation] = useState(false);
    const [showPixel, setShowPixel] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const currentIndexRef = useRef(currentIndex);
    currentIndexRef.current = currentIndex;

    const navigate = useNavigate();
    const location = useLocation();

    // useEffect(() => {
    //     const interval = setInterval(async () => {
    //         try {
    //             const response = await fetch('/status');
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 if (data.bothChecked) {
    //                     setConfirmation(true);
    //                     clearInterval(interval);
    //                 }
    //             } else {
    //                 console.error('Failed to check status');
    //             }
    //         } catch (error) {
    //             console.error('Error:', error);
    //         }
    //     }, 3000);

    //     return () => clearInterval(interval);
    // }, []);

    // const sendSign = async () => {
    //     try {
    //         const response = await fetch('/send', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ message: 'sign' })
    //         });

    //         if (response.ok) {
    //             console.log('Message sent successfully');
    //         } else {
    //             console.error('Failed to send message');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };

    const getRouteFromQuery = useCallback(() => {
        const params = new URLSearchParams(location.search);
        return params.get('route');
    }, [location]);

    useEffect(() => {
        if (showContainer2) {
            // 선택지 발생 이미지가 나온 후 3초 후에 이미지를 숨기고 버튼을 표시하기 위해 setTimeout 사용
            const timeout1 = setTimeout(() => {
                setShowImage(false);

                // 선택지 발생 이미지가 완전히 사라진 후에 버튼을 표시하도록 setTimeout 사용
                const timeout2 = setTimeout(() => {
                    setShowButtons(true);
                }, 1000); // 1초 뒤에 버튼을 표시
              
                // 컴포넌트가 언마운트될 때 두 번째 timeout을 클리어하여 메모리 누수를 방지
                return () => clearTimeout(timeout2);
            }, 3000); // 3초 뒤에 선택지 발생 이미지를 숨김

            // 컴포넌트가 언마운트될 때 첫 번째 timeout을 클리어하여 메모리 누수를 방지
            return () => clearTimeout(timeout1);
        }
    }, [showContainer2]);

    const advanceDialogue = useCallback(() => {
        setCurrentIndex(prevIndex => {
            if (showContainer2) {
                return prevIndex; // showContainer2가 true인 경우 인덱스 증가하지 않음
            }

            const newIndex = Math.min(prevIndex + 1, routeData.length - 1);
            if (routeData[newIndex]?.select) {
                setShowContainer2(true);
            } else if (newIndex === routeData.length - 1) {
                const route = getRouteFromQuery();
                navigate(`/${chapter}?route=${route}`);
            }
            return newIndex;
        });
    }, [showContainer2, routeData, getRouteFromQuery, navigate, chapter]);

    const retreatDialogue = useCallback(() => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    }, []);

    useEffect(() => {
        const handleKeyPress = (event) => {
            const { key } = event;
            const currentDialogue = routeData[currentIndexRef.current];

            // if (!confirmation && currentDialogue.text === "어??? 민들레?!!") return;

            if (key === 'Enter' || key === ' ' || key === 'ArrowRight') {
                if (!isTyping) {
                    advanceDialogue();
                } else {
                    setIsTyping(false); // 현재 타이핑 중이면 전체 텍스트를 바로 표시
                }
            } else if (key === 'ArrowLeft') {
                retreatDialogue();
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [advanceDialogue, retreatDialogue, confirmation, isTyping]);

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

    const typeText = useCallback((text) => {
        setIsTyping(true);
        let index = 0;
        const interval = setInterval(() => {
            if (!isTyping) {
                clearInterval(interval);
                setDisplayText(text);
                return;
            }
            if (index < text.length) {
                setDisplayText(prev => prev + text.charAt(index));
                index++;
            } else {
                clearInterval(interval);
                setIsTyping(false);
            }
        }, 50); // 글자가 출력되는 속도 조정
    }, [isTyping]);

    useEffect(() => {
        const { text } = getNextDialogue();
        setDisplayText(''); // 이전 텍스트 초기화
        typeText(text);
    }, [currentIndex, typeText]);

    const { name, img, window, background } = getNextDialogue();


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


    const handleChoice = (event) => {
        
        //버튼 클릭 효과음
        const audio = new Audio('./music/selectionOccurred_music.mp3');
        audio.play();

        // 선택지 값 가져오기
        const { value } = event.target;

        //루트값 가져오기 (End)
        const currentRoute = location.pathname;
        const lastThreeChars = currentRoute.slice(-3);
        
        if (value === "select1") {
            setShowContainer2(false);
            setShowButtons(false);
            setShowImage(true);
            setCurrentIndex(prevIndex => prevIndex + 1);
            //현재 루트의 뒤 3글자가 End
            if (lastThreeChars === "End") {
                navigate(goodEnd);
            }
        } else if (value === "select2") {
            navigate(end);
        }
    };

    useEffect(() => {
        if (text === "(핸드폰을 보자)") {
            // sendSign();
        }
    }, [text]);

    //홈화면으로
    const goStart = () => {
        navigate("/")
    }

    return (
        <>
            {!showContainer2 ? (
                !showPixel ? (
                    <div className={styles.container1}>
                        <img src={background} className={styles.background}/>
                        <div className={styles.start} onClick={goStart}></div>
                        <img src={img} className={styles.kimyeojuImg}/>
                        <img src={window} className={styles.dialogueWindow1}/>
                        <div className={styles.nameAndDialogue}>
                            <div className={styles.name}>{name}</div>
                            <div className={styles.dialogue}>{displayText}</div>
                            <button className={styles.next}></button>
                        </div>
                    </div>
                ):(  
                    
                    <Pixel pixelImg={pixelImg}/>
                )
                ) : (
                <div className={styles.container2}>
                    <div className={styles.start} onClick={goStart}></div>
                    <img src={`./images/${silhouette}/${silhouette}_silhouette.png`} className={styles.silhouette}/>
                    <div className={styles.selectImgDiv}>
                        {showImage && (
                        <img src="./images/effect/optionImg.png" className={`${styles.selectImg} ${showImage ? 'show' : ''}`}/>
                        )}
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
                </div>
            )}
        </>
    );
}

export default Dialogue;
