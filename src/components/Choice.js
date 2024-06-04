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
    console.log(root)
    let choice;
    if (root === "baekleehyunRoute") {
        choice = Choice[currentIndex];
        currentIndex++
    } else if (root === "doYoonRoute") {
        choice = Choice[currentIndex]; 
        currentIndex++
    } else if (root === "choijaeyulRoute") {
        choice = Choice[currentIndex]; 
        currentIndex++
    } 

    const handleButtonClick = (event) => {
        const btnValue = event.target.value;
        console.log(btnValue);

        // 버튼 클릭에 따라 리다이렉션 또는 다른 액션 수행
        // 여기에 적절한 로직 추가

        // 예시로 리다이렉션을 수행
        navigate("/waitingPerson");
    };

    return (
        <div className={styles.selectButtons}>
            <button className={styles.selectButton} onClick={handleButtonClick} value={"select1"}>
                <p>{root === choice.name ? choice.text1 : choice.text2}</p>
            </button>
            <button className={styles.selectButton} onClick={handleButtonClick} value={"select2"}>
                <p>{root === choice.name ? choice.text2 : choice.text1}</p>
            </button>
        </div>
    );
}