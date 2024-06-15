import { useState, useEffect, useRef } from 'react';
import styles from './css/question.module.css';
import { useNavigate } from 'react-router-dom';

export default function Question() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [answers, setAnswers] = useState([]); 
  const navigate = useNavigate();

  const questions = [
    {"q1": "당신은 어떤 사람으로 기억되고 싶은가?", "a1": "훌륭한 사람", "a2": "지혜로운 사람", "a3": "용감한 사람"},
    {"q1": "당신이 배우고 싶은 것은?", "a1": "운동", "a2": "예술", "a3": "음악"},
    {"q1": "당신은 길을 걷고 있던 중 고양이 한 마리를 발견했습니다. 그 고양이의 생김새는?", "a1": "털이 북실한 장모 고양이", "a2": "호박 눈을 가진 샴고양이", "a3": "어미에게 버려진 새끼 고양이"},
    {"q1": "아래 신분중 하나를 선택할 수 있습니다. 당신의 선택은?", "a1": "국왕", "a2": "학자", "a3": "평범한 일반인"}
  ];

  const getNextQuestion = () => {
    const nextQuestion = questions[currentIndex];
    return {
      q1: nextQuestion.q1,
      a1: nextQuestion.a1,
      a2: nextQuestion.a2,
      a3: nextQuestion.a3,
    };
  };

  const handleRadioValue = (e) => {
    setSelectedAnswer(e.target.value);
    setIsButtonVisible(true);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      setAnswers([...answers, selectedAnswer]);
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer("");
        setIsButtonVisible(false);
      } else {
        const sum = answers.reduce((total, current) => total + parseInt(current), 0);
        let route = "";
        if (sum >= 3 && sum <= 5) {
          route = "baekLeeHyunRoute";
        } else if (sum >= 6 && sum <= 7) {
          route = "doYoonRoute";
        } else if (sum >= 8 && sum <= 9) {
          route = "choiJaeYulRoute";
        }
        console.log(sum);
        navigate(`/opening?route=${route}`);
      }
    }
  };

  const audioRef = useRef(null);

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.error('자동 재생 실패:', error);
        });
      }
    }, []);

  useEffect(() => {
    const radioButtons = document.querySelectorAll("input[name='answer']");
    radioButtons.forEach((radio) => (radio.checked = false));
  }, [currentIndex]);
  
  const question = getNextQuestion();

  return (
        <div className={styles.background}>
          <audio ref={audioRef} src="./music/question_music.mp3" />
        <div className={styles.radio}>
          <label className={styles.radioLabel}>
            <input type="radio" name="answer" value="1" checked={selectedAnswer === "1"} onChange={handleRadioValue} />
            <span className={selectedAnswer === "1" ? styles.selectedAnswer : styles.radioText}>{question.a1}</span>
          </label>
          <label className={styles.radioLabel}>
            <input type="radio" name="answer" value="2" checked={selectedAnswer === "2"} onChange={handleRadioValue} />
            <span className={selectedAnswer === "2" ? styles.selectedAnswer : styles.radioText}>{question.a2}</span>
          </label>
          <label className={styles.radioLabel}>
            <input type="radio" name="answer" value="3" checked={selectedAnswer === "3"} onChange={handleRadioValue} />
            <span className={selectedAnswer === "3" ? styles.selectedAnswer : styles.radioText}>{question.a3}</span>
          </label>
        </div>
        <div className={styles.magicHat}></div>
        <div className={styles.questionTitle}>
          {question.q1}
          {isButtonVisible && (
            <button className={styles.nextButton} onClick={handleNextQuestion}></button>
          )}
        </div>
      </div>
  );
}