import "./css/all.css";
import styles from "./css/chapter1.module.css";
import { useNavigate } from "react-router-dom";

export default function Chapter1(){

    const navigate = useNavigate();

    const next = () => {
        setTimeout(()=> navigate('/baekLeeHyunRoute'), 3000)
    }

    return (
        <div>
            <div className={styles.background}>
                <div className={styles.chapter1}><img src="./images/chapter1.png" onChange={next()}/></div>
            </div>
        </div>
    );
} 