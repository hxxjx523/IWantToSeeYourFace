import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/all.css";
import styles from "./css/start.module.css";

export default function Start() {
    const naviage = useNavigate();
    
  const [showBackground, setShowBackground] = useState(false)
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [timer, setTimer] = useState(5);

    const handleStartClick = () => {
        sendReset1();
        sendReset2();
        setShowBackground(true);
        setTimer(5); // 타이머 초기화 및 시작
        setIsButtonEnabled(false); // 버튼 비활성화
    }
    
    useEffect(() => {
        let countdown;
        if (showBackground && timer > 0) {
          countdown = setTimeout(() => {
            setTimer(timer - 1);
          }, 1000);
        } else if (timer === 0) {
          setIsButtonEnabled(true);
        }
        return () => clearTimeout(countdown);
      }, [showBackground, timer]);
        
        const handleGameStart = () => {
            setShowBackground(false)
            naviage('/question');
        }


        const handleEndingCount = () => {
            naviage("/endingCount")
        }

        const sendReset1 = async () => {
            try {
                const response = await fetch('/send', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: '' })
                });
            } catch (error) {
                console.error('Error:', error);
            }
        };

        const sendReset2 = async () => {
            try {
                const response = await fetch('/sign', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: '' })
                });
            } catch (error) {
                console.error('Error:', error);
            }
        };

    return (
        <>
            {!showBackground ? (
                <div id={styles.background}>
                    <div className={styles.btn}>
                        <button className={styles.StartBtn} onClick={handleStartClick}></button>
                        <button className={styles.EndingCntBtn} onClick={handleEndingCount}></button>
                    </div>
                </div>

            ) : (
                <div className={styles.gameStart}>
                {/* <button className={styles.playBtn} onClick={handleGameStart}></button> */}
                <button disabled={!isButtonEnabled} className={`${styles.button} ${isButtonEnabled ? styles.playBtn1 : styles.playBtn2}`} onClick={handleGameStart}>
                    {isButtonEnabled ? 'Play!' : `Play! ( ${timer}초 )`}
                </button>
                </div>
            )}
        </>
    );
}