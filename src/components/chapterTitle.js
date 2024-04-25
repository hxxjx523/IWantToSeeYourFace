import "./css/all.css";
import styles from "./css/chapterTitle.module.css";

export default function ChapterTitle(){
    document.body.style.backgroundColor = `#A87BE2`;
    return (
        <div>
            <div className={styles.backgroun}>
                <div className={styles.txt}>첫번째</div>
                <div className={styles.titleTxt}>첫만남</div>
            </div>
        </div>
    );
}