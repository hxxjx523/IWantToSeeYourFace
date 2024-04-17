import './css/question.css'
export default function Question() {

  
    return (
      <div className="qbackground">
        <div className="questionImg"></div>
          <div className="question">
            <div className="questionTitle">당신은 어떤 사람으로 기억되고 싶은가?</div>
            <div className="qRadio">
              <span>훌륭한 사람<input type="radio" name="answer"/></span> <br />
              <span>지혜로운 사람<input type="radio" name="answer"/></span> <br />
              <span>용감한 사람<input type="radio" name="answer"/></span> 
            </div>
          </div>
      </div>
    );
  }
