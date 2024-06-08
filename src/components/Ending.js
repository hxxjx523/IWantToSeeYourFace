import styles from "./css/End.module.css";

function Ending({ endTitle, endContent }){

    return (
        <div className={styles.WaitingPerson}>
            <div className={styles.endingTitle}>
                <p style={{ fontFamily: "ChosunGs" }}>{endTitle}</p>
            </div>
            <div className={styles.endingComment}>
                <p style={{ fontFamily: "ChosunGs" }}>{endContent}</p>
            </div>
        </div>
    )

}

export default Ending