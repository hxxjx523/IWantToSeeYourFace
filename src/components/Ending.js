import { useState, useEffect } from "react";
import styles from "./css/End.module.css";
import { useNavigate } from "react-router-dom";

function Ending({ endTitle, endContent, background }) {
    const backgroundClassName = `${styles[background]}`;

    const [showEndingComment, setShowEndingComment] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(false); // 버튼 표시 여부를 관리하는 상태 추가

    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowRight" || event.key === "Enter" || event.key === " ") {
                setShowEndingComment(prevState => !prevState);
                setButtonVisible(true); // 버튼 보이게 설정
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const endingCount = () => {
        navigate("/endingCount")
    }

    return (
        <div className={backgroundClassName}>
            <div className={styles.endingTitle}>
                <p style={{ fontFamily: "ChosunGs" }}>{endTitle}</p>
            </div>
            {!showEndingComment && (
                <div className={styles.endingComment}>
                    <p style={{ fontFamily: "ChosunGs" }}>{endContent}</p>
                </div>
            )}
            {buttonVisible && (
                <button className={styles.home} onClick={endingCount}></button>
            )}
        </div>
    );
}

export default Ending;