import React from "react";
import Image from "next/image";
import styles from './WhatWeDo.module.css';
const WhatWeDo = () => {
    return (
        <>
            <section className={styles.whatwedo}>
                <div className="wrapper">
                    <div className={styles.content}>
                        <div className={`main-heading ${styles.heading}`}>What We Do</div>
                        <div className={`sub-heading ${styles.subHeading}`}>We offer a range of AI-driven chatbot solutions tailored to meet the unique needs of our clients. Our offerings include:</div>
                    </div>
                    <div className={styles.layout}>
                        <div className={styles.layoutbox}>
                            <Image className={styles.mainImage} width={600} height={510} src="/assets/whatwedo.png" alt="Image" />
                        </div>
                        <div className={styles.layoutbox}>
                            <div className={styles.cards}>
                                <div className={styles.card}>
                                    <Image className="icon" width={40} height={40} src="/assets/whatwedo1.png" alt="Icon" />
                                    <div className={styles.cardContent}>
                                        <div className={`main-heading ${styles.cardHeading}`}>AI Chatbots</div>
                                        <div className={`sub-heading ${styles.cardSubHeading}`}>Intelligent chatbots that provide accurate, responsive, and natural interactions with customers.</div>
                                    </div>
                                </div>
                                <div className={styles.card}>
                                    <Image className="icon" width={40} height={40} src="/assets/whatwedo2.png" alt="Icon" />
                                    <div className={styles.cardContent}>
                                        <div className={`main-heading ${styles.cardHeading}`}>Live Agent Support</div>
                                        <div className={`sub-heading ${styles.cardSubHeading}`}>A seamless blend of AI and human support to offer personalized, empathetic customer service.</div>
                                    </div>
                                </div> <div className={styles.card}>
                                    <Image className="icon" width={40} height={40} src="/assets/whatwedo3.png" alt="Icon" />
                                    <div className={styles.cardContent}>
                                        <div className={`main-heading ${styles.cardHeading}`}>Omnichannel Dashboard</div>
                                        <div className={`sub-heading ${styles.cardSubHeading}`}>A centralized interface for managing customer interactions across various platforms.</div>
                                    </div>
                                </div> <div className={styles.card}>
                                    <Image className="icon" width={40} height={40} src="/assets/whatwedo4.png" alt="Icon" />
                                    <div className={styles.cardContent}>
                                        <div className={`main-heading ${styles.cardHeading}`}>WhatsApp Integration</div>
                                        <div className={`sub-heading ${styles.cardSubHeading}`}>Enhancing customer engagement through seamless communication on WhatsApp.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default WhatWeDo;