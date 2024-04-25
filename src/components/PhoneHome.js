import "./css/all.css";
import styles from "./css/phoneHome.module.css";
import { useNavigate } from "react-router-dom";

export default function PhoneHome(){
    const navigate = useNavigate();

    return (
        <div className={styles.background}>
            <div className={styles.app}>
                <button onClick={() => navigate('/PhoneNumber')}><img src="./images/phone_addressApp.png" alt="" width="70px"/></button>
                <button><img src="./images/phone_callApp.png" alt="" width="70px"/></button>
                <button onClick={() => navigate('/PhoneMessage')}><img src="./images/phone_messageApp.png" alt="" width="70px"/></button>
                <button><img src="./images/phone_galleryApp.png" alt="" width="70px"/></button>
            </div>
        </div>
    );
}