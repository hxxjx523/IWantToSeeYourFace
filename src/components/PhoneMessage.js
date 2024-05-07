import "./css/all.css";
// import styles from "./css/phoneMessage.module.css";
import styles from "./css/phoneMessage.module.css";
import { useNavigate } from "react-router-dom";

export default function PhoneMessage(){
    const navigate = useNavigate();

    return(
        <div className={`${styles.background} ${styles.back}`}>
            <button className={styles.preBtn} onClick={() => navigate('/phoneHome')}></button>
            <button onClick={() => navigate('/phoneMessage_page1')}>메세지</button>
        </div>
    );
}