import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './components/start';
import Question from './components/question';
import Story1 from './components/story1'
import Story2 from './components/story2'
import Phone from './components/phone'
import PhoneHome from './components/phoneHome'
import PhoneNumber from './components/phoneNumber'
import PhoneMessage from './components/phoneMessage'
import PhoneMessage_page1 from './components/phoneMessage_page1'
import ChapterTitle from './components/chapterTitle';


  export default function App() {
  
  return (
    <div className="App">
     
    <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Start />}></Route>
              <Route path={"/question"} element={<Question />}></Route>
              <Route path={"/story1"} element={<Story1 />}></Route>
              <Route path={"/story2"} element={<Story2 />}></Route>
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