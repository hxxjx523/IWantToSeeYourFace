import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './components/start';
import Question from './components/Question';


  export default function App() {
  
  return (
    <div className="App">
     
    <BrowserRouter>
          <Routes>
              <Route path={"/start"} element={<Start />}></Route>
              <Route path={"/question"} element={<Question />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}