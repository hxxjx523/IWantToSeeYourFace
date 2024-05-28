import "./css/all.css";
import styles from "./css/chapter3.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Chapter2(){

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => navigate('/baekLeeHyunRouteEnd'), 3000);
        return () => clearTimeout(timer); // 타이머 클리어
    }, [navigate]);

    return (
        <div>
            <div className={styles.background}>
                <div className={styles.chapter2}><img src="./images/chapter3.png"/></div>
            </div>
        </div>
    );
} 