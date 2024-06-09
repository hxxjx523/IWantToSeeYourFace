import React, { useState, useEffect } from 'react';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

import styles from './components/css/endingCount.module.css'
import { useNavigate } from 'react-router-dom';

function EndingCount(){
  const [endings, setEndings] = useState([]);
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

  return (
    <div className={styles.background}>
        <div className={styles.start} onClick={goStart}></div>
      <div className={styles.title}>엔딩 횟수</div>
      <div className={styles.subTitle}>
        <div style={{width: "800px", borderBottom: "1px #fff solid"}}>엔딩</div>
        <div style={{borderBottom: "1px #fff solid"}}>전체 누적 횟수</div>
      </div>
      <div className={styles.elements}>
            {endings.map(ending => (
                <div className={styles.data}><div>{ending.id}</div> <div>{ending.count}회</div></div>
            ))}
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default EndingCount;