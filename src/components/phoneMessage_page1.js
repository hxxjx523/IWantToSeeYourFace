import "./css/all.css";
import styles from "./css/phoneMessage.module.css";
import { useNavigate } from "react-router-dom";

export default function PhoneMessage_page1(){
    document.body.style.backgroundImage = "../public/images/phone_message1.png";

    const navigate = useNavigate();

    return(
         <div className={`${styles.background1} ${styles.back}`}>
             <button className={styles.preBtn} onClick={() => navigate('/phoneMessage')}></button>
         </div>
    );
}