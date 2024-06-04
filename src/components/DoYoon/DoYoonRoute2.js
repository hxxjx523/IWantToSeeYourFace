import "../css/all.css";

import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import baekLeeHyunRoute from '../json/DoYoonRoute2.json'; // JSON 파일 경로에 맞게 수정
import Dialogue from "../Dialogue";
import ChoiceContainer from "../ChoiceContainer";

export default function BaekLeeHyunRoute2() {
    const [showImage, setShowImage] = useState(true);
    const [showButtons, setShowButtons] = useState(false); 
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const [showContainer2, setShowContainer2] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const getRouteFromQuery = () => {
        const params = new URLSearchParams(location.search);
        return params.get('route');
    };

    useEffect(() => {
        if (showContainer2) {
            const timeout = setTimeout(() => {
                setShowImage(false);
                setTimeout(() => {
                    setShowButtons(true);
                }, 100); 
            }, 3000); 
            
            // 컴포넌트가 언마운트될 때 timeout을 클리어하여 메모리 누수를 방지
            return () => clearTimeout(timeout);
        }
    }, [showContainer2]);
    
    useEffect(() => {
        const handleKeyPress = (event) => {
            const { key } = event;
            
            if (key === 'Enter' || key === ' ' || key === 'ArrowRight') {
                setCurrentIndex(prevIndex => {
                    const newIndex = Math.min(prevIndex + 1, baekLeeHyunRoute.length - 1);
                    if (baekLeeHyunRoute[newIndex]?.select) {
                        setShowContainer2(true);
                    }else if (newIndex === baekLeeHyunRoute.length - 1) {
                        const route = getRouteFromQuery();
                        navigate(`/chapter3?route=${route}`)
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
    }, [navigate]);

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

    const handleChoice = (wait) => {
        if (wait) {
            setShowContainer2(false);
            setShowButtons(false);
            setShowImage(true);
            setCurrentIndex(prevIndex => prevIndex + 1); // 'select:true' 다음으로 이동
        } else {
            navigate("/waitingPerson");
        }
    };

    return (
        <>
            {!showContainer2 ? (
                <Dialogue 
                    name={getNextDialogue().name} 
                    text={getNextDialogue().text} 
                    img={getNextDialogue().img} 
                    window={getNextDialogue().window} 
                    background={getNextDialogue().background} 
                    isExiting={isExiting} 
                />
            ) : (
                <ChoiceContainer 
                    showImage={showImage}
                    showButtons={showButtons}
                    handleChoice={handleChoice}
                />
            )}
        </>
    );
}   