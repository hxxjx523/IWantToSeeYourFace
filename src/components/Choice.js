import "./css/all.css";
import styles from "./css/Dialogue.module.css";
import Choice from './json/Choice.json'; // 선택지 JSON 데이터 임포트

import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ChoiceContainer() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    const getRouteFromQuery = () => {
        const params = new URLSearchParams(location.search);
        return params.get('route');
    };

    const root = getRouteFromQuery();
    console.log(root);

    useEffect(() => {
        let initialIndex = 0;
        if (root === "baekleehyunRoute") {
            initialIndex = 0;
        } else if (root === "doYoonRoute") {
            initialIndex = 2;
        } else if (root === "choijaeyulRoute") {
            initialIndex = 4;
        }
        setCurrentIndex(initialIndex);
    }, [root]);

    
    const choice = Choice[currentIndex];
    
    const handleButtonClick = (event) => {
        if (currentIndex < Choice.length) {
            setCurrentIndex(prevIndex=> prevIndex);
        }
        const btnValue = event.target.value;
        console.log(btnValue);

        if (root === "baekleehyunRoute") {
            setCurrentIndex(0);
        } else if (root === "doYoonRoute") {
            setCurrentIndex(2);
        } else if (root === "choijaeyulRoute") {
            setCurrentIndex(4);
        }
    };

    return (
        <div className={styles.selectButtons}>
            <button className={styles.selectButton} onClick={handleButtonClick} value={"select1"}>
                <p>{choice ? choice.text1 : ""}</p>
            </button>
            <button className={styles.selectButton} onClick={handleButtonClick} value={"select2"}>
                <p>{choice ? choice.text2 : ""}</p>
            </button>
        </div>
    );
}