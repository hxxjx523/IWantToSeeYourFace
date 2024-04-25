import styles from './css/question.module.css'
export default function Question() {

  
    return (
      <div className={styles.qbackground}>
        <div className={styles.questionImg}></div>
          <div className={styles.question}>
            <div className={styles.questionTitle}>당신은 어떤 사람으로 기억되고 싶은가?</div>
            <div className={styles.qRadio}>
              <span className={styles.radio}>훌륭한 사람<input type="radio" name="answer"/></span> <br />
              <span className={styles.radio}>지혜로운 사람<input type="radio" name="answer"/></span> <br />
              <span className={styles.radio}>용감한 사람<input type="radio" name="answer" /></span> 
            </div>
          </div>
      </div>
    );
  }
