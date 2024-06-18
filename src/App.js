import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from './firebase';

import AutoRedirect from './components/AutoRedirect';

import Start from './components/Start.js';
import Question from './components/Question';
import Opening from './components/Opening';
import BaekLeeHyunRoute1 from './components/BaekLeeHyun/BaekLeeHyunRoute1';
import BaekLeeHyunRoute2 from './components/BaekLeeHyun/BaekLeeHyunRoute2';
import BaekLeeHyunRouteEnd from './components/BaekLeeHyun/BaekLeeHyunRouteEnd.js';
import Chapter1 from './components/Chapter/Chapter1';
import Chapter2 from './components/Chapter/Chapter2';
import Chapter3 from './components/Chapter/Chapter3';
import GoodStudentCouncil from './components/BaekLeeHyun/GoodStudentCouncil';
import WaitingPerson from './components/BaekLeeHyun/WaitingPerson';
import BaekLeeHyunGoodEnding from './components/BaekLeeHyun/BaekLeeHyunGoodEnding.js';
import FirstStory from './components/FirstStory.js';
import DoYoonRoute1 from './components/DoYoon/DoYoonRoute1.js';
import DoYoonRoute2 from './components/DoYoon/DoYoonRoute2.js';
import DoYoonRouteEnd from './components/DoYoon/DoYoonRouteEnd.js';
import NotMe from './components/DoYoon/NotMe.js';
import BadCook from './components/DoYoon/BadCook.js';
import DoYoonGoodEnding from './components/DoYoon/DoYoonGoodEnding.js';
import ChoiJaeYulRoute1 from './components/ChoiJaeYul/ChoiJaeYulRoute1.js';
import ChoiJaeYulRoute2 from './components/ChoiJaeYul/ChoiJaeYulRoute2.js';
import ChoiJaeYulRouteEnd from './components/ChoiJaeYul/ChoiJaeYulRouteEnd.js';
import DoULikeGame from './components/ChoiJaeYul/DoULikeGame.js';
import WorstGuest from './components/ChoiJaeYul/WorstGuest.js';
import ChoiJaeYulGoodEnding from './components/ChoiJaeYul/ChoiJaeYulGoodEnding.js';
import EndingCount from './components/EndingCount';
import Pixel from './components/Pixel.js';

const App = () => {
  const audioRef = useRef(null);
  const isAudioPlaying = useRef(false);

  const handleClick = () => {
      audioRef.current.play();
  };

  const updateRouteCount = async (route) => {
    try {
      const routeRef = doc(db, 'Ending', route);
      const routeSnap = await getDoc(routeRef);

      if (routeSnap.exists()) {
        await updateDoc(routeRef, {
          count: increment(1),
        });
      } else {
        await setDoc(routeRef, { count: 1 });
      }
      console.log(`Successfully updated count for ${route}`);
    } catch (error) {
      console.error(`Error updating count for ${route}:`, error);
    }
  };

  const RouteCounter = () => {
    const location = useLocation();

    React.useEffect(() => {
      const route = location.pathname.slice(1);
      // 특정 경로에 따라 라우트 카운트를 업데이트합니다.
      if (route === 'notMe' || route === 'badCook' || route === 'doYoonGoodEnding' || route === 'choiJaeYulGoodEnding' 
        || route === 'doULikeGame' || route === 'worstGuest' || route === 'goodStudentCouncil' || route === 'waitingPerson' || route === 'baekLeeHyunGoodEnding') {
        updateRouteCount(route);
      }
    }, [location]);
  
    return null;
  };

  return (
    <div className="App" onClick={handleClick}>
      {/* 오디오 요소를 추가하여 배경 음악을 재생합니다. */}
      <audio ref={audioRef} loop>
        <source src={`${process.env.PUBLIC_URL}/music/back_music.mp3`} type="audio/mpeg" />
      </audio>
      
      <Router>
        <AutoRedirect>
          <RouteCounter />
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/question" element={<Question />} />
            <Route path="/opening" element={<Opening />} />
            <Route path="/firstStory" element={<FirstStory />} />
            <Route path="/endingCount" element={<EndingCount />} />
            <Route path="/pixel" element={<Pixel />} />

            <Route path="/baekLeeHyunRoute1" element={<BaekLeeHyunRoute1 />} />
            <Route path="/baekLeeHyunRoute2" element={<BaekLeeHyunRoute2 />} />
            <Route path="/baekLeeHyunRouteEnd" element={<BaekLeeHyunRouteEnd />} />
            <Route path="/goodStudentCouncil" element={<GoodStudentCouncil />} />
            <Route path="/waitingPerson" element={<WaitingPerson />} />
            <Route path="/baekLeeHyunGoodEnding" element={<BaekLeeHyunGoodEnding />} />

            <Route path="/doYoonRoute1" element={<DoYoonRoute1 />} />
            <Route path="/doYoonRoute2" element={<DoYoonRoute2 />} />
            <Route path="/doYoonRouteEnd" element={<DoYoonRouteEnd />} />
            <Route path="/notMe" element={<NotMe />} />
            <Route path="/badCook" element={<BadCook />} />
            <Route path="/doYoonGoodEnding" element={<DoYoonGoodEnding />} />

            <Route path="/choiJaeYulRoute1" element={<ChoiJaeYulRoute1 />} />
            <Route path="/choiJaeYulRoute2" element={<ChoiJaeYulRoute2 />} />
            <Route path="/choiJaeYulRouteEnd" element={<ChoiJaeYulRouteEnd />} />
            <Route path="/doULikeGame" element={<DoULikeGame />} />
            <Route path="/worstGuest" element={<WorstGuest />} />
            <Route path="/choiJaeYulGoodEnding" element={<ChoiJaeYulGoodEnding />} />

            <Route path="/chapter1" element={<Chapter1 />} />
            <Route path="/chapter2" element={<Chapter2 />} />
            <Route path="/chapter3" element={<Chapter3 />} />
          </Routes>
        </AutoRedirect>
      </Router>
    </div>
  );
};

export default App;
