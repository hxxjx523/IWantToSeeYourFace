import "../css/all.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import baekLeeHyunRoute from '../json/baekLeeHyunRoute1.json'; // JSON 파일 경로에 맞게 수정
import Dialogue from "../Dialogue";

function BaekLeeHyunRoute1(){
    const [showImage, setShowImage] = useState(true);
    const [showButtons, setShowButtons] = useState(false); 
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const [isReturning, setIsReturning] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const getRouteFromQuery = () => {
        const params = new URLSearchParams(location.search);
        return params.get('route');
    };

    useEffect(() => {
        
        const timeout = setTimeout(() => {
            setShowImage(false);
            setShowButtons(true);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const handleKeyPress = (event) => {
            const { key } = event;
    
            if (key === 'Enter' || key === ' ' || key === 'ArrowRight') {
                setCurrentIndex(prevIndex => {
                    const newIndex = Math.min(prevIndex + 1, baekLeeHyunRoute.length - 1);
                    if (newIndex === baekLeeHyunRoute.length - 1) {
                        const route = getRouteFromQuery();
                        navigate(`/chapter2?route=${route}`);
                    }
                    return newIndex;
                });
            } else if (key === 'ArrowLeft') {
                setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
            }
        };
    
        window.addEventListener('keydown', handleKeyPress);
    
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [isReturning, navigate]);

    const getNextDialogue = () => {
        const nextDialogue = baekLeeHyunRoute[currentIndex];
        return {
            name: nextDialogue.name,
            text: nextDialogue.text,
            img: nextDialogue.img,
            window: nextDialogue.window,
            background: nextDialogue.background
        };
    };

    const handleButtonClick = () => {
    };

    

    return (
        <Dialogue 
            name={getNextDialogue().name} 
            text={getNextDialogue().text} 
            img={getNextDialogue().img} 
            window={getNextDialogue().window} 
            background={getNextDialogue().background} 
            isExiting={isExiting} 
        />
    );

}

export default BaekLeeHyunRoute1