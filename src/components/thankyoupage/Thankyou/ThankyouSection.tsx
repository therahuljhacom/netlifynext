import React from "react";
import styles from './ThankyouSection.module.css';
import Link from 'next/link'

const ThankyouSection = () => {
    return (
        <>
            <section className={styles["thankyou-section"]}>
                <div className="wrapper">
                    <div className={styles["thankyou-content"]}>
                        <div className={`main-heading ${styles['thankyou-heading']}`}>Thank You</div>
                        <div className={styles["form-heading"]}>We have received your request. We will get in-touch with you shortly.</div>
                        <Link href='/'><button>Go to thinkchat.io</button></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ThankyouSection;