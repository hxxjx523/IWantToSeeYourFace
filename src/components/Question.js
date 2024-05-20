import { Suspense, useState } from 'react';
import styles from './css/question.module.css'
import { useNavigate } from 'react-router-dom';
export default function Question() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [answers, setAnswers] = useState([]); // 누적될 답변을 저장할 배열
  const navigate = useNavigate()

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
        a3: nextQuestion.a3
    };
};

const handleRadioValue = (e) => {
  setSelectedAnswer(e.target.value);
  setIsButtonVisible(true);
  console.log(e.target.value);
};

const handleNextQuestion = () => {
  if (selectedAnswer) {
    // answer에 value 값 저장
    setAnswers([...answers, selectedAnswer]);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer('');
      setIsButtonVisible(false);
    } else {
      // 마지막 질문 이후의 로직을 여기에 추가
      const sum = answers.reduce((total, current) => total + parseInt(current), 0);
      console.log('Sum of answers:', sum);
      navigate("/opening")
    }
  }
};

const question = getNextQuestion();

  
    return (
      <div className={styles.qbackground}>
        <div className={styles.questionImg}><img src='./images/Mindlerea_silhouette.png'/></div>
          <div className={styles.question}>
            <div className={styles.questionTitle}>{getNextQuestion().q1}</div>
            <div className={styles.qRadio}>
              <span className={styles.radio}>{getNextQuestion().a1}<input type="radio" name="answer" value={1} onChange={handleRadioValue}/></span> <br />
              <span className={styles.radio}>{getNextQuestion().a2}<input type="radio" name="answer" value={2} onChange={handleRadioValue}/></span> <br />
              <span className={styles.radio}>{getNextQuestion().a3}<input type="radio" name="answer" value={3} onChange={handleRadioValue}/></span> 
            </div>
          {isButtonVisible && (
          <button onClick={handleNextQuestion} className="nextBtn">Next</button>
          )}
          </div>
      </div>
    );
};
