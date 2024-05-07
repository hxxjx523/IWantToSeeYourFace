import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './components/Start';
import Question from './components/Question';
import Opening from './components/Opening'
import BaekLeeHyunRoute from './components/BaekLeeHyunRoute'
import Phone from './components/Phone'
import PhoneHome from './components/PhoneHome'
import PhoneNumber from './components/PhoneNumber'
import PhoneMessage from './components/PhoneMessage'
import PhoneMessage_page1 from './components/PhoneMessage_page1'
import ChapterTitle from './components/ChapterTitle';


  export default function App() {
  
  return (
    <div className="App">
     
    <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Start />}></Route>
              <Route path={"/question"} element={<Question />}></Route>
              <Route path={"/opening"} element={<Opening />}></Route>
              <Route path={"/baekLeeHyunRoute"} element={<BaekLeeHyunRoute />}></Route>
              <Route path={"/phone"} element={<Phone />}></Route>
              <Route path={"/phoneHome"} element={<PhoneHome />}></Route>
              <Route path={"/phoneNumber"} element={<PhoneNumber />}></Route>
              <Route path={"/phoneMessage"} element={<PhoneMessage />}></Route>
              <Route path={"/phoneMessage_page1"} element={<PhoneMessage_page1 />}></Route>
              <Route path={"/chapterTitle"} element={<ChapterTitle />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}