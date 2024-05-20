import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './components/Start.js';
import Question from './components/Question';
import Opening from './components/Opening'
import BaekLeeHyunRoute1 from './components/BaekLeeHyunRoute1'
import Phone from './components/Phone'
import PhoneHome from './components/PhoneHome'
import PhoneNumber from './components/PhoneNumber'
import PhoneMessage from './components/PhoneMessage.js'
import PhoneMessage_page1 from './components/PhoneMessage_page1'
import Chapter1 from './components/Chapter1';
import Chapter2 from './components/Chapter2';
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
              <Route path={"/phone"} element={<Phone />}></Route>
              <Route path={"/phoneHome"} element={<PhoneHome />}></Route>
              <Route path={"/phoneNumber"} element={<PhoneNumber />}></Route>
              <Route path={"/phoneMessage"} element={<PhoneMessage />}></Route>
              <Route path={"/phoneMessage_page1"} element={<PhoneMessage_page1 />}></Route>
              <Route path={"/chapter1"} element={<Chapter1 />}></Route>
              <Route path={"/chapter2"} element={<Chapter2 />}></Route>
              {/* <Route path={"/miniGame"} element={<MiniGame />}></Route> */}
          </Routes>
        </BrowserRouter>
      </div>
  );
}