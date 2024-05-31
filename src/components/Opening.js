import "./css/all.css";
import styles from "./css/Dialogue.module.css"
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import opening from './json/opening.json'; 
function Opening() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const getRouteFromQuery = () => {
        const params = new URLSearchParams(location.search);
        return params.get('route');
    };

    useEffect(() => {
        const route = getRouteFromQuery();
        if (currentIndex >= opening.length) {
            setIsExiting(true);
            setTimeout(() => navigate(`/firstStory?route=${route}`), 300);
        }
    }, [currentIndex, location, navigate]);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowRight') {
                setCurrentIndex(prevIndex => Math.min(prevIndex + 1, opening.length));
            } else if (event.key === 'ArrowLeft') {
                setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const getNextDialogue = () => {
        if (currentIndex < opening.length) {
            const nextDialogue = opening[currentIndex];
            return {
                name: nextDialogue.name,
                text: nextDialogue.text,
                img: nextDialogue.img,
                window: nextDialogue.window
            };
        }
        return { name: "", text: "", img: "", window: "" };
    };

    return (
        <div className={`${styles.container1} ${isExiting ? styles.fadeOut : ''}`}>
            <img src={getNextDialogue().img} className={styles.kimyeojuImg}/>
            <img src={getNextDialogue().window} className={styles.dialogueWindow1}/>
            <div className={styles.nameAndDialogue}>
                <div className={styles.name}>{getNextDialogue().name}</div>
                <div className={styles.dialogue}>{getNextDialogue().text}</div>
            </div>
        </div>
    );
}

export default Opening