import React, { useState, useEffect } from 'react';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

import styles from './components/css/endingCount.module.css'
import { useNavigate } from 'react-router-dom';

function EndingCount(){
  const [endings, setEndings] = useState([]);
  const [pageIndex, setPageIndex] = useState(0); // 페이지 인덱스를 관리하는 상태
  const naviage = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endingsCollection = collection(db, 'Ending');
        const endingsSnapshot = await getDocs(endingsCollection);
        const endingsData = endingsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setEndings(endingsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const goStart = () => {
    naviage("/")
  }

  const itemsPerPage = 5; // 한 페이지에 보여질 아이템 수

  const totalPages = Math.ceil(endings.length / itemsPerPage); // 전체 페이지 수 계산

  const goLeft = () => {
    setPageIndex(pageIndex - 1);
  };

  const goRight = () => {
    setPageIndex(pageIndex + 1);
  };

  return (
    <div className={styles.background}>
      <div className={styles.start} onClick={goStart}></div>
      <div className={styles.title}>엔딩 횟수</div>
      <div className={styles.subTitle}>
        <div style={{ width: "800px", borderBottom: "1px #fff solid" }}>엔딩</div>
        <div style={{ borderBottom: "1px #fff solid" }}>전체 누적 횟수</div>
      </div>
      <div className={styles.elements}>
        {endings.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((ending) => (
          <div key={ending.id} className={styles.data}>
            <div>{ending.id}</div>
            <div>{ending.count}회</div>
          </div>
        ))}
      </div>
        <button className={styles.left} onClick={goLeft} style={{ visibility: pageIndex === 0 ? "hidden" : "visible" }}></button>
        <button className={styles.right} onClick={goRight} style={{ visibility: pageIndex === totalPages - 1 ? "hidden" : "visible" }}></button>
    </div>
  );
};

export default EndingCount;