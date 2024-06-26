import "../css/all.css";
import styles from "../css/chapter3.module.css";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Chapter2(){

    const navigate = useNavigate();
    const location = useLocation();

    const getRouteFromQuery = () => {
        const params = new URLSearchParams(location.search);
        return params.get('route');
    };

    useEffect(() => {
        const route = getRouteFromQuery();

        const next = () => {
            setTimeout(() => navigate(`/${route}End?route=${route}`), 3000);
        };

        next();
    }, [location, navigate]);

    return (
        <div>
            <div className={styles.background}>
                <div className={styles.chapter2}><img src="./images/chapter/chapter3.png"/></div>
            </div>
        </div>
    );
} 