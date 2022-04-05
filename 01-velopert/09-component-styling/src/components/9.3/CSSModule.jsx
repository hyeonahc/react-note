import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
  console.log(styles);

  return (
    // 클래스가 하나일때
    // <div className={styles.wrapper}>
    // 클래스가 두개일때
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
