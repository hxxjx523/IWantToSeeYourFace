import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './components/start';
import Question from './components/Question';
import Story1 from './components/story1'


  export default function App() {
  
  return (
    <div className="App">
     
    <BrowserRouter>
          <Routes>
              <Route path={"/start"} element={<Start />}></Route>
              <Route path={"/question"} element={<Question />}></Route>
              <Route path={"/story1"} element={<Story1 />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}