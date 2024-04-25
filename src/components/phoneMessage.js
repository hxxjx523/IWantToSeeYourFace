import "./css/all.css";
// import styles from "./css/phoneMessage.module.css";
import styles from "./css/phoneMessage.module.css";

export default function PhoneMessage(){
    return(
        <div className={styles.background}>
            <a href="/phoneHome"><button className={styles.preBtn}></button></a>
            <a href="/phoneMessage_page1"><button>메세지</button></a>
        </div>
    );
}