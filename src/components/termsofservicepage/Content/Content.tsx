import React from "react";
import styles from './Content.module.css';
const Content = () => {
    return (
        <>
            <section className={styles.contentSection}>
                <div className="wrapper">
                    <div className={styles.contentBox}>
                        <div className={styles.title}>Introduction</div>
                        <div className={styles.para}>Welcome to ThinkChat.io. These Terms of Service (&quot;Terms&quot;) govern your use of our website and services. By accessing or using ThinkChat.io, you agree to comply with and be bound by these Terms.</div>
                        <div className={styles.title}>Use of Services</div>
                        <ul className={styles.list}>
                            <li><b>Eligibility:</b> You must be at least 18 years old to use our services.</li>
                            <li><b>Account Registration:</b> You may need to create an account to access certain features. You are responsible for maintaining the confidentiality of your account information.</li>
                            <li><b>Prohibited Activities:</b> You agree not to use our services for any unlawful purposes, to violate any applicable laws, or to infringe on the rights of others.</li>
                        </ul>

                        <div className={styles.title}>User Content</div>
                        <ul className={styles.list}>
                            <li><b>Responsibility:</b> You are responsible for any content you upload or submit. You grant ThinkChat.io a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute your content.
                            </li>
                            <li><b>Prohibited Content:</b> You agree not to upload or share content that is offensive, harmful, or violates any laws or regulations.
                            </li>
                        </ul>
                        <div className={styles.title}>Intellectual Property</div>
                        <ul className={styles.list}>
                            <li><b>Ownership:</b> All content, trademarks, and data on ThinkChat.io are owned by us or our licensors. You may not use any of our intellectual property without prior written consent.</li>
                        </ul>
                        <div className={styles.title}>Disclaimers and Limitation of Liability</div>
                        <ul className={styles.list}>
                            <li><b>As-Is Basis:</b> Our services are provided on an &quot;as-is&quot; basis without warranties of any kind. We do not guarantee the accuracy, completeness, or reliability of our services.</li>
                            <li><b>Limitation:</b> ThinkChat.io will not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our services.</li>
                        </ul>
                        <div className={styles.title}>Indemnification</div>
                        <div className={styles.para}>You agree to indemnify and hold ThinkChat.io harmless from any claims, damages, or expenses arising from your use of our services or violation of these Terms.</div>
                        <div className={styles.title}>Termination</div>
                        <div className={styles.para}>We reserve the right to terminate or suspend your account and access to our services at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users.</div>
                        <div className={styles.title}>Changes to Terms</div>
                        <div className={styles.para}>We may update these Terms from time to time. Your continued use of our services constitutes your acceptance of the new Terms.</div>
                        {/* <div className={styles.title}>Governing Law</div>
                        <div className={styles.para}>These Terms are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in [Your Country/State].</div> */}
                        <div className={styles.title}>Contact Us</div>
                        <div className={styles.para}>If you have any questions about these Terms, please contact us at:</div>
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