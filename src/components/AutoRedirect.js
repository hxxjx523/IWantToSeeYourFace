import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AutoRedirect = ({ children }) => {
  const navigate = useNavigate();
  const [timeoutId, setTimeoutId] = useState(null);
  const lastActivityTimeRef = useRef(Date.now()); // 최근 활동 시간을 기록하는 useRef

  const startTimer = () => {
    const id = setTimeout(() => {
      if (shouldRedirect()) {
        navigate("/");
      } else {
        startTimer(); // 아직 활동이 있으면 타이머를 다시 시작
      }
    }, 60000); // 1분 후에 "/"로 리다이렉트

    setTimeoutId(id);
  };

  const resetTimer = () => {
    clearTimeout(timeoutId); // 기존 타이머 클리어
    lastActivityTimeRef.current = Date.now(); // 최근 활동 시간 갱신
    startTimer(); // 새로운 타이머 시작
  };

  const shouldRedirect = () => {
    const currentTime = Date.now();
    const elapsedTime = currentTime - lastActivityTimeRef.current;
    return elapsedTime > 60000; // 1분(60000 밀리초) 이상 활동이 없으면 리다이렉트
  };

  const handleActivity = () => {
    resetTimer(); // 사용자 활동 감지 시 타이머 재설정
  };

  useEffect(() => {
    startTimer(); // 컴포넌트 마운트 시 타이머 시작

    // 이벤트 리스너 등록
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('keyup', handleActivity);
    window.addEventListener('scroll', handleActivity);

    return () => {
      // 컴포넌트 언마운트 시 타이머 클리어 및 이벤트 리스너 제거
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('keyup', handleActivity);
      window.removeEventListener('scroll', handleActivity);
    };
  }, []); // useEffect 내 timeoutId 의존성 배열에서 제거

  return <>{children}</>;
};

export default AutoRedirect;
