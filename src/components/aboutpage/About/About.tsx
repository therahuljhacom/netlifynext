import React from "react";
import styles from './About.module.css';
import Image from "next/image";
const About = () => {
    return (
        <>
            <section className={styles.about}>
                <div className="wrapper">
                    <div className={styles["about-content"]}>
                        <div className={`main-heading ${styles['about-heading']}`}>Innovating Customer Communication with AI-Powered Solutions</div>
                        <div className={`sub-heading ${styles['about-sub-heading']}`}>At ThinkChat.io, we are dedicated to transforming the way businesses interact with their customers through innovative AI solutions. Our mission is to empower businesses with intelligent chatbots that provide seamless, personalised, and secure communication across multiple platforms. With a team of seasoned professionals specialising in artificial intelligence, machine learning, and natural language processing, we are committed to delivering cutting-edge solutions that enhance customer engagement, streamline operations, and drive business growth. Whether it&apos;s through AI chatbots, live agent support, omnichannel dashboards, or WhatsApp integration, we strive to offer comprehensive and customizable solutions that meet the unique needs of each client. Join us on our journey to revolutionise customer communication and experience the future of AI-driven interactions.</div>
                        <div className={styles.cards}>
                            <div className={styles.card}>
                                <div className={styles.icon}><Image width={50} height={50} src="/assets/abouticon1.png" alt="Icon" /></div>
                                <div className={styles.cardContent}>
                                    <div className={`main-heading ${styles.cardHeading}`}>Our Vision</div>
                                    <div className={`sub-heading ${styles.cardSubHeading}`}>At ThinkChat.io, our vision is to revolutionise the way businesses interact with their customers through innovative AI solutions. We aim to create intelligent, responsive, and human-like chatbots that not only enhance customer engagement but also streamline business operations.</div>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.icon}><Image width={50} height={50} src="/assets/abouticon2.png" alt="Icon" /></div>
                                <div className={styles.cardContent}>
                                    <div className={`main-heading ${styles.cardHeading}`}>Our Mission</div>
                                    <div className={`sub-heading ${styles.cardSubHeading}`}>Our mission is to empower businesses with cutting-edge AI technologies that provide seamless, personalised, and secure communication across multiple platforms. We are dedicated to delivering solutions that improve customer satisfaction, boost operational efficiency, and drive business growth.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;