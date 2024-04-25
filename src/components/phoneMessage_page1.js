import "./css/all.css";
import styles from "./css/phoneMessage.module.css";

export default function PhoneMessage_page1(){
    return(
         <div className={styles.background}/*{styles.back}*/>
             <a href="/phoneMessage"><button className={styles.preBtn}></button></a>
         </div>
    );
}