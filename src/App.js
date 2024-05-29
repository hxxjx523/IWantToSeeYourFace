import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
// import MiniGame from './components/MiniGame';


  export default function App() {
  
  return (
    <div className="App">
     
    <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Start />}></Route>
              <Route path={"/question"} element={<Question />}></Route>
              <Route path={"/opening"} element={<Opening />}></Route>
              <Route path={"/baekLeeHyunRoute1"} element={<BaekLeeHyunRoute1 />}></Route>
              <Route path={"/baekLeeHyunRoute2"} element={<BaekLeeHyunRoute2 />}></Route>
              <Route path={"/baekLeeHyunRouteEnd"} element={<BaekLeeHyunRouteEnd />}></Route>
              <Route path={"/goodStudentCouncil"} element={<GoodStudentCouncil />}></Route>
              <Route path={"/waitingPerson"} element={<WaitingPerson />}></Route>
              <Route path={"/baekLeeHyunGoodEnding"} element={<BaekLeeHyunGoodEnding />}></Route>
              <Route path={"/chapter1"} element={<Chapter1 />}></Route>
              <Route path={"/chapter2"} element={<Chapter2 />}></Route>
              <Route path={"/chapter3"} element={<Chapter3 />}></Route>
              
          </Routes>
        </BrowserRouter>
      </div>
  );
}