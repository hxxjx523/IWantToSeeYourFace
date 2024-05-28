import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../css/all.css";
import styles from "../css/chapter1.module.css";

function Chapter1() {
    const navigate = useNavigate();
    const location = useLocation();

    const getRouteFromQuery = () => {
        const params = new URLSearchParams(location.search);
        return params.get('route');
    };

    useEffect(() => {
        const route = getRouteFromQuery();

        const next = () => {
            setTimeout(() => navigate(`/${route}1?route=${route}`), 3000);
        };

        next();
    }, [location, navigate]);
    
    

    return (
        <div>
            <div className={styles.background}>
                <div className={styles.chapter1}><img src="./images/chapter1.png"/></div>
            </div>
        </div>
    );
}

export default Chapter1