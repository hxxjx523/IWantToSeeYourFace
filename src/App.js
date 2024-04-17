import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './components/start';
import Question from './components/Question';
import Story1 from './components/story1'
import Story2 from './components/story2'
import Phone from './components/Phone'
import PhoneHome from './components/PhoneHome'
import PhoneNumber from './components/PhoneNumber'


  export default function App() {
  
  return (
    <div className="App">
     
    <BrowserRouter>
          <Routes>
              <Route path={"/start"} element={<Start />}></Route>
              <Route path={"/question"} element={<Question />}></Route>
              <Route path={"/story1"} element={<Story1 />}></Route>
              <Route path={"/story2"} element={<Story2 />}></Route>
              <Route path={"/phone"} element={<Phone />}></Route>
              <Route path={"/phoneHome"} element={<PhoneHome />}></Route>
              <Route path={"/phoneNumber"} element={<PhoneNumber />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}