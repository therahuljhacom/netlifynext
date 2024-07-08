import React from "react";
import styles from './Topbanner.module.css';
import Link from "next/link";
const Topbanner = () => {
  return (
    <>
      <section className={styles.topBanner}>
        <div className="wrapper">
          <div className={styles.content}>
            <div className={`main-heading ${styles.mainHeading}`}>About ThinkChat</div>
            <div className={`sub-heading ${styles.subHeading}`}>Learn About Our Story, Our Journey, Our Impressive Growth & Our Leadership Team</div>
            <Link href={'/contact'}><button className={styles.bannerBtn}>Get in Touch</button></Link>
          </div>
        </div>
      </section>
    </>
  )
}
export default Topbanner;