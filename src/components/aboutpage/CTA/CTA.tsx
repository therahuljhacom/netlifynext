import React from "react";
import styles from './CTA.module.css';
import Link from "next/link";

const CTA = () => {
    return (
        <>
            <section className={styles.business}>
                <div className="wrapper">
                    <div className={styles["business-content"]}>
                        <div className={styles["bus-cont"]}>
                        <div className={styles.keyfactorTitle}>Get in Touch</div>
                            <div className={`main-heading ${styles.heading}`}>Book a free consultation with our expert!</div>
                            <div className={`sub-heading ${styles['bus-sub-heading']}`}>Contact us today to see how ThinkChat.io can transform your business communication.</div>
                            <div className={styles["business-btn"]}>
                                <Link href={'/contact'}><button>Let&apos;s Connect Now</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CTA;