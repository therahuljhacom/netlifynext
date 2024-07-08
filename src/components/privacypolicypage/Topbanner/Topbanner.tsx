import React from "react";
import styles from './Topbanner.module.css';
const Topbanner = () => {
  return (
    <>
      <section className={styles.topBanner}>
        <div className="wrapper">
          <div className={styles.content}>
            <div className={`main-heading ${styles.mainHeading}`}>Privacy Policy</div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Topbanner;