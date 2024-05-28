// import "../css/all.css";
import styles from "../css/goodEnd.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GoodStudentCouncil(){

    const navigate = useNavigate();
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const handleKeyPress = (event) => {
            const { key } = event;
            if (key === 'Enter' || key === ' ' || key === 'ArrowRight') {
                setShowText(prevShowText => !prevShowText);
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div>
            <div className={styles.background}>
                <div className={styles.endingTitle}><p>END(2/9) - GoodStudentCouncil</p></div>
                {showText && <div className={styles.endingComment}><p>모든 건 적당히 하는 것이 좋다</p></div>}
            </div>
        </div>
    );
} 