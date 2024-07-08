import React from "react";
import Image from "next/image";
import styles from './OurValues.module.css';
const OurValues = () => {
    return (
        <>
            <section className={styles.values}>
                <div className="wrapper">
                    <div className={styles.content}>
                        <div className={`main-heading ${styles.heading}`}>Our Values</div>
                        <div className={`sub-heading ${styles.subHeading}`}>At ThinkChat.io, we are driven by a set of core values that define our approach and guide our actions:
                        </div>
                    </div>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <Image className="icon" width={80} height={50} src="/assets/value1.png" alt="Icon" />
                            <div className={styles.cardContent}>
                                <div className={`main-heading ${styles.cardHeading}`}>Innovation</div>
                                <div className={`sub-heading ${styles.cardSubHeading}`}>We are committed to pushing the boundaries of AI technology to deliver cutting-edge solutions.</div>
                            </div>
                        </div> 
                        <div className={styles.card}>
                            <Image className="icon" width={80} height={50} src="/assets/value2.png" alt="Icon" />
                            <div className={styles.cardContent}>
                                <div className={`main-heading ${styles.cardHeading}`}>Customer-Centricity</div>
                                <div className={`sub-heading ${styles.cardSubHeading}`}>Our focus is on understanding and meeting the needs of our clients and their customers.</div>
                            </div>
                        </div> <div className={styles.card}>
                            <Image className="icon" width={80} height={50} src="/assets/value3.png" alt="Icon" />
                            <div className={styles.cardContent}>
                                <div className={`main-heading ${styles.cardHeading}`}>Integrity</div>
                                <div className={`sub-heading ${styles.cardSubHeading}`}>We conduct our business with the highest standards of ethics and transparency.</div>
                            </div>
                        </div> <div className={styles.card}>
                            <Image className="icon" width={80} height={50} src="/assets/value4.png" alt="Icon" />
                            <div className={styles.cardContent}>
                                <div className={`main-heading ${styles.cardHeading}`}>Excellence</div>
                                <div className={`sub-heading ${styles.cardSubHeading}`}>We strive for excellence in everything we do, from product development to customer service.</div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <Image className="icon" width={80} height={50} src="/assets/value5.png" alt="Icon" />
                            <div className={styles.cardContent}>
                                <div className={`main-heading ${styles.cardHeading}`}>Collaboration</div>
                                <div className={`sub-heading ${styles.cardSubHeading}`}>We believe in the power of collaboration and work closely with our clients to achieve their goals.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default OurValues;