import React from 'react';
import styles from "./css/Dialogue.module.css";
import Choice from './Choice';

function ChoiceContainer({ showImage, showButtons, handleChoice }){
    return (
        <div className={styles.container2}>
            <img src="../images/Baekleehyun/Baekleehyun_silhouette.png" className={styles.silhouette} alt="Silhouette" />

            <div className={styles.selectImgDiv}>
                {showImage && (
                    <img
                        src="./images/effect/optionImg.png"
                        className={`${styles.selectImg} ${showImage ? 'show' : ''}`}
                        alt="Option Appeared"
                    />
                )}
            </div>

            {showButtons && (
                <Choice onChoice={handleChoice} />
            )}
        </div>
    );
};

export default ChoiceContainer;