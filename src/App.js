import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from './firebase';

import Start from './components/Start.js';
import Question from './components/Question';
import Opening from './components/Opening'
import BaekLeeHyunRoute1 from './components/BaekLeeHyun/BaekLeeHyunRoute1'
import BaekLeeHyunRoute2 from './components/BaekLeeHyun/BaekLeeHyunRoute2'
import BaekLeeHyunRouteEnd from './components/BaekLeeHyun/BaekLeeHyunRouteEnd.js'
import Chapter1 from './components/Chapter/Chapter1';
import Chapter2 from './components/Chapter/Chapter2';
import Chapter3 from './components/Chapter/Chapter3';
import GoodStudentCouncil from './components/BaekLeeHyun/GoodStudentCouncil'
import WaitingPerson from './components/BaekLeeHyun/WaitingPerson'
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
import EndingCount from './EndingCount';
import Pixel from './components/Pixel.js';

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

    useEffect(() => {
      const route = location.pathname.slice(1);
      if (route === 'notMe' || route === 'badCook' || route === 'doYoonGoodEnding' || route === 'choiJaeYulGoodEnding' 
    || route === 'doULikeGame' || route === 'worstGuest' || route === 'goodStudentCouncil' || route === 'waitingPerson' || route === 'baekLeeHyunGoodEnding'){
        updateRouteCount(route);
      }
    }, [location]);
  
    return null;

};

const App = () => {
  
  return (
    <div className="App">
     
    <Router>
      <RouteCounter />
          <Routes>
              <Route path={"/"} element={<Start />}></Route>
              <Route path={"/question"} element={<Question />}></Route>
              <Route path={"/opening"} element={<Opening />}></Route>
              <Route path={"/firstStory"} element={<FirstStory />}></Route>
              <Route path={"/endingCount"} element={<EndingCount />}></Route>
              <Route path={"/pixel"} element={<Pixel />}></Route>


              <Route path={"/baekLeeHyunRoute1"} element={<BaekLeeHyunRoute1 />}></Route>
              <Route path={"/baekLeeHyunRoute2"} element={<BaekLeeHyunRoute2 />}></Route>
              <Route path={"/baekLeeHyunRouteEnd"} element={<BaekLeeHyunRouteEnd />}></Route>
              <Route path={"/goodStudentCouncil"} element={<GoodStudentCouncil />}></Route>
              <Route path={"/waitingPerson"} element={<WaitingPerson />}></Route>
              <Route path={"/baekLeeHyunGoodEnding"} element={<BaekLeeHyunGoodEnding />}></Route>

              <Route path={"/doYoonRoute1"} element={<DoYoonRoute1 />}></Route>
              <Route path={"/doYoonRoute2"} element={<DoYoonRoute2 />}></Route>
              <Route path={"/doYoonRouteEnd"} element={<DoYoonRouteEnd />}></Route>
              <Route path={"/notMe"} element={<NotMe />}></Route>
              <Route path={"/badCook"} element={<BadCook />}></Route>
              <Route path={"/doYoonGoodEnding"} element={<DoYoonGoodEnding />}></Route>

              <Route path={"/choiJaeYulRoute1"} element={<ChoiJaeYulRoute1 />}></Route>
              <Route path={"/choiJaeYulRoute2"} element={<ChoiJaeYulRoute2   />}></Route>
              <Route path={"/choiJaeYulRouteEnd"} element={<ChoiJaeYulRouteEnd />}></Route>
              <Route path={"/doULikeGame"} element={<DoULikeGame />}></Route>
              <Route path={"/worstGuest"} element={<WorstGuest />}></Route>
              <Route path={"/choiJaeYulGoodEnding"} element={<ChoiJaeYulGoodEnding />}></Route>




              <Route path={"/chapter1"} element={<Chapter1 />}></Route>
              <Route path={"/chapter2"} element={<Chapter2 />}></Route>
              <Route path={"/chapter3"} element={<Chapter3 />}></Route>
            </Routes>
        </Router>
      </div>
  );
}

export default App