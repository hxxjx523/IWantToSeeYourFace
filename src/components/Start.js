import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/all.css";
import styles from "./css/start.module.css";

export default function Start() {
    const naviage = useNavigate();
    const [audioPlayed, setAudioPlayed] = useState(false);
    const audioRef = useRef(null);
    
  const [showBackground, setShowBackground] = useState(false)
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [timer, setTimer] = useState(5);

    const handleMusicClick = () => {
        if (!audioPlayed) {
            const audio = new Audio('./music/title_music.mp3'); 
            audio.loop = true; 
            audio.play(); 
            audioRef.current = audio; 
            setAudioPlayed(true); 
        }else{
            audioRef.current.pause();
            audioRef.current.currentTime = 0; 
            setAudioPlayed(false); 
        }
    };

    const handleStartClick = () => {
        if(audioPlayed){
            audioRef.current.pause();
            audioRef.current.currentTime = 0; 
            setAudioPlayed(false); 
        }
        
        setShowBackground(true)
        }
        
        const handleGameStart = () => {
            setShowBackground(false)
            naviage('/question');
        }


        const handleEndingCount = () => {
            naviage("/endingCount")
        }

        useEffect(() => {
            if (timer > 0) {
              const countdown = setTimeout(() => {
                setTimer(timer - 1);
              }, 1000);
        
              return () => clearTimeout(countdown);
            } else {
              setIsButtonEnabled(true);
            }
          }, [timer]);

    return (
        <>
            {!showBackground ? (
                <div id={styles.background}>
                        <button className={styles.MusicBtn} onClick={handleMusicClick}><img src="./images/music-note-beamed.svg" alt="" width="30px"/></button>
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