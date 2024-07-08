import React from "react";
import styles from './Content.module.css';
const Content = () => {
    return (
        <>
            <section className={styles.contentSection}>
                <div className="wrapper">
                    <div className={styles.contentBox}>
                        <div className={styles.title}>Introduction</div>
                        <div className={styles.para}>ThinkChat.io (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website and use our services.</div>
                        <div className={styles.title}>Information We Collect</div>
                        <div className={styles.subTitle}>Personal Information</div>
                        <div className={styles.para}>We may collect personal information such as your name, email address, phone number, and company details when you:</div>
                        <ul className={styles.list}>
                            <li>Register on our website</li>
                            <li>Subscribe to our newsletter</li>
                            <li>Fill out a form</li>
                            <li>Use our chatbot services</li>
                        </ul>
                        <div className={styles.title}>Usage Data</div>
                        <div className={styles.para}>We automatically collect data about your interactions with our website, including your IP address, browser type, operating system, pages visited, and the dates and times of your visits.</div>
                        <div className={styles.title}>How We Use Your Information</div>
                        <div className={styles.para}>We use the information we collect to:</div>
                        <ul className={styles.list}>
                            <li>Provide and maintain our services</li>
                            <li>Improve, personalise, and expand our website</li>
                            <li>Communicate with you, including responding to inquiries and providing updates</li>
                            <li>Analyse usage patterns to enhance user experience</li>
                            <li>Protect against fraudulent activity and ensure security</li>
                        </ul>
                        <div className={styles.title}>Sharing Your Information</div>
                        <div className={styles.para}>We do not sell or trade your personal information to third parties. However, we may share your information with trusted partners who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.</div>
                        <div className={styles.title}>Data Security</div>
                        <div className={styles.para}>We implement a variety of security measures to maintain the safety of your personal information. These include using encryption, firewalls, and secure server environments.</div>
                        <div className={styles.title}>Cookies</div>
                        <div className={styles.para}>Our website uses cookies to enhance user experience, gather visitor information, and track visits to our website. You can choose to disable cookies through your browser settings, but some features of our website may not function properly without them.</div>
                        <div className={styles.title}>Third-Party Links</div>
                        <div className={styles.para}>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these other sites. We encourage you to read their privacy policies.</div>
                        <div className={styles.title}>Your Rights</div>
                        <div className={styles.para}>You have the right to:</div>
                        <ul className={styles.list}>
                            <li>Access and receive a copy of your personal data</li>
                            <li>Request correction or deletion of your personal data</li>
                            <li>Object to the processing of your personal data</li>
                            <li>Withdraw consent at any time where we rely on your consent to process your information</li>
                        </ul>
                        <div className={styles.title}>Changes to This Privacy Policy</div>
                        <div className={styles.para}>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</div>
                        <div className={styles.title}>Contact Us</div>
                        <div className={styles.para}>If you have any questions about this Privacy Policy, please contact us at:</div>
                        <ul className={styles.list}>
                            <li>Email: <a className={styles.link} target="blank" href="mailto:team@thinkchat.io">team@thinkchat.io</a></li>
                            <li>Address: 8 The Green #14951 Dover , Delaware , 19901</li>
                        </ul>
                        <div className={styles.para}>This Privacy Policy was last updated on 19/04/2024.</div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Content;