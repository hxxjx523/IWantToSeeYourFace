import { useNavigate } from "react-router-dom";
import "./css/all.css";
import styles from "./css/start.module.css";

export default function Start() {
    const movePage = useNavigate();

    const handleStartClick = () => {
        movePage('/question');
    };

    return (
        <div id={styles.background}>
            <div className={styles.btn}>
                <button className={styles.StartBtn} onClick={handleStartClick}></button>
                <button className={styles.EndingCntBtn}></button>
            </div>
        </div>
    );
}
