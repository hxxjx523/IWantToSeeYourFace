import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './components/Start.js';
import Question from './components/Question';
import Opening from './components/Opening'
import BaekLeeHyunRoute1 from './components/BaekLeeHyun/BaekLeeHyunRoute1'
import BaekLeeHyunRoute2 from './components/BaekLeeHyun/BaekLeeHyunRoute2'
import BaekLeeHyunRoute3_1 from './components/BaekLeeHyun/BaekLeeHyunRoute3_1.js'
import BaekLeeHyunRouteEnd from './components/BaekLeeHyun/BaekLeeHyunRouteEnd.js'
import Phone from './components/Phone'
import PhoneHome from './components/PhoneHome'
import PhoneNumber from './components/PhoneNumber'
import PhoneMessage from './components/PhoneMessage.js'
import PhoneMessage_page1 from './components/PhoneMessage_page1'
import Chapter1 from './components/Chapter1';
import Chapter2 from './components/Chapter2';
import Chapter3 from './components/Chapter3';




import GoodStudentCouncil from './components/BaekLeeHyun/GoodStudentCouncil.js'
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
              <Route path={"/baekLeeHyunRoute3_1"} element={<BaekLeeHyunRoute3_1 />}></Route>
              <Route path={"/baekLeeHyunRouteEnd"} element={<BaekLeeHyunRouteEnd />}></Route>
              <Route path={"/goodStudentCouncil"} element={<GoodStudentCouncil />}></Route>
              <Route path={"/phone"} element={<Phone />}></Route>
              <Route path={"/phoneHome"} element={<PhoneHome />}></Route>
              <Route path={"/phoneNumber"} element={<PhoneNumber />}></Route>
              <Route path={"/phoneMessage"} element={<PhoneMessage />}></Route>
              <Route path={"/phoneMessage_page1"} element={<PhoneMessage_page1 />}></Route>
              <Route path={"/chapter1"} element={<Chapter1 />}></Route>
              <Route path={"/chapter2"} element={<Chapter2 />}></Route>
              <Route path={"/chapter3"} element={<Chapter3 />}></Route>
              
          </Routes>
        </BrowserRouter>
      </div>
  );
}