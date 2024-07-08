import React from "react";
import styles from './ServiceAbout.module.css';
interface IPROPS {
    title: string,
    description: string
}
const ServiceAbout: React.FC<IPROPS> = ({ title, description }) => {
    return (
        <>
            <section className={styles.about}>
                <div className="wrapper">
                    <div className={styles.content}>
                        <div className={`main-heading ${styles.heading}`}>{title}</div>
                        <div className={`sub-heading ${styles.subHeading}`} dangerouslySetInnerHTML={{ __html: description }}></div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ServiceAbout;