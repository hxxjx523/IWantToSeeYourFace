import { useState, useEffect } from "react";
import styles from "./css/End.module.css";

function Ending({ endTitle, endContent, background }) {
    const backgroundClassName = `${styles[background]}`;

    const [showEndingComment, setShowEndingComment] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowRight" || event.key === "Enter" || event.key === " ") {
                setShowEndingComment(prevState => !prevState);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

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
        </div>
    );
}

export default Ending;