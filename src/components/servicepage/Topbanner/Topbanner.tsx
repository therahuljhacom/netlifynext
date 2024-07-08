import React from "react";
import styles from './Topbanner.module.css';
import Image from "next/image";
interface IPROPS {
  title: string,
  description: string
}
const Topbanner: React.FC<IPROPS> = ({ title, description }) => {
  return (
    <>
      <section className={styles.topBanner}>
        <div className="wrapper">
          <div className={styles.content}>
            <div className={`main-heading ${styles.mainHeading}`}>{title}</div>
            <div className={`sub-heading ${styles.subHeading}`}>{description}</div>
            <button className={styles.bannerBtn}>Get in Touch</button>
            {/* <Image width={900} height={620} src={'/assets/banner-screen.png'} alt="Image" /> */}
            <video className={styles.video} loop autoPlay muted playsInline>
              <source src='/assets/newvideo.webm' type='video/webm' />
            </video>
          </div>
        </div>
      </section>
    </>
  )
}
export default Topbanner;