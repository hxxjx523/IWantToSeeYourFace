import "./css/all.css";
import styles from "./css/phoneNumber.module.css";
import { useNavigate } from "react-router-dom";

export default function PhoneNumber(){
    const navigate = useNavigate();

    return (
        <div className={styles.background}>
            <button className={styles.preBtn} onClick={() => navigate('/PhoneHome')}></button>
            <br/>
            <br/>
            <br/>
        </div>
    );
}