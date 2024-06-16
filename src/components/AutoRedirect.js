import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AutoRedirect = ({ children }) => {
  const navigate = useNavigate();
  const [timeoutId, setTimeoutId] = useState(null);

  const startTimer = () => {
    const id = setTimeout(() => {
      navigate("/");
    }, 30000); // 5초
    setTimeoutId(id);
  };

  const resetTimer = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    startTimer();
  };

  useEffect(() => {
    // 마우스 움직임, 키보드 입력, 스크롤 등의 이벤트 리스너 추가
    const handleActivity = () => {
      resetTimer();
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('scroll', handleActivity);

    // 컴포넌트가 언마운트 될 때 이벤트 리스너와 타이머 정리
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('scroll', handleActivity);
    };
  }, [timeoutId]);

  return (
    <div>
      {children}
    </div>
  );
};

export default AutoRedirect;
