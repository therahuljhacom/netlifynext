import React from "react";
import styles from './PlatformSection.module.css';
import { FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';
const PlatformSection = () => {
    return (
        <>
            <section className={styles["platform"]}>
                <div className="wrapper">
                    <div className={styles["platform-content"]}>
                        <div className={`main-heading ${styles['platform-heading']}`}>Unified, user friendly solutions</div>
                        <div className={`sub-heading ${styles['platform-sub-heading']}`}>Our advanced capabilities and services can significantly enhance your website&apos;s or services&apos; interactive and visual appeal, making them more competitive in digital spaces. Connect us and maximize your team performance.</div>
                        <div className={styles["pointers"]}>
                            <div className={styles["pointer"]}>
                                <div className={styles["pointer-icon"]}>
                                    <FaCheckCircle />
                                </div>
                                <div className={styles["pointer-content"]}>
                                    <div className={styles["pointer-title"]}>Data privacy</div>
                                    <div className={styles["pointer-text"]}>We prioritize safeguarding sensitive information, ensuring compliance, and building trust with your users.</div>
                                </div>
                            </div>
                            <div className={styles["pointer"]}>
                                <div className={styles["pointer-icon"]}>
                                    <FaCheckCircle />
                                </div>
                                <div className={styles["pointer-content"]}>
                                    <div className={styles["pointer-title"]}>Security  </div>
                                    <div className={styles["pointer-text"]}>Implementing robust measures to protect data integrity and prevent unauthorized access.</div>
                                </div>
                            </div>
                            <div className={styles["pointer"]}>
                                <div className={styles["pointer-icon"]}>
                                    <FaCheckCircle />
                                </div>
                                <div className={styles["pointer-content"]}>
                                    <div className={styles["pointer-title"]}>Reliability</div>
                                    <div className={styles["pointer-text"]}>Delivering consistent performance and accurate responses for seamless user experiences.</div>
                                </div>
                            </div>
                        </div>
                      <div className={styles["platform-cards-container"]}>
                      <div className={styles["platform-cards"]}>
                            <div className={styles["platform-card"]}>
                                <div className={styles["platform-card-content"]}>
                                    <div className={styles["icon"]}>
                                        <Image width={40} height={36}  src='/assets/p1.webp' alt="p1" />
                                    </div>
                                    <div className={styles["content"]}>
                                        <div className={`main-heading ${styles['platform-heading']}`}>Enhance Customer Attention</div>
                                        <div className={styles["text"]}>Elevate customer engagement with live chat support, AI-powered chatbots, and customizable widgets, providing instant assistance and seamless interactions tailored to your brand.</div>
                                    </div>
                                    <div className={styles["content-img"]}>
                                        <Image width={272} height={212}  src='/assets/p1-contentImage.webp' alt="contentImage" />
                                    </div>
                                </div>
                            </div>
                            <div className={styles["platform-card"]}>
                                <div className={styles["platform-card-content"]}>
                                    <div className={styles["icon"]}>
                                        <Image width={40} height={36}  src='/assets/p2.webp' alt="p1" />
                                    </div>
                                    <div className={styles["content"]}>
                                        <div className={`main-heading ${styles['platform-heading']}`}>Integrated Support</div>
                                        <div className={styles["text"]}>Efficiently manage customer queries across channels. Seamlessly integrate email, social media, and SMS for responsive support, ensuring a streamlined customer communication experience.</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["platform-card"]}>
                                <div className={styles["platform-card-content"]}>
                                    <div className={styles["icon"]}>
                                        <Image width={40} height={36}  src='/assets/p3.webp' alt="p1" />
                                    </div>
                                    <div className={styles["content"]}>
                                        <div className={`main-heading ${styles['platform-heading']}`}>AI-driven Automation</div>
                                        <div className={styles["text"]}>Maximize efficiency with AI and automation tools. NLP refines chatbot responses, ML algorithms learn for better automation, and sentiment analysis tailor’s responses for personalized customer interactions.</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["platform-card"]}>
                                <div className={styles["platform-card-content"]}>
                                    <div className={styles["icon"]}>
                                        <Image width={40} height={36}  src='/assets/p4.webp' alt="p1" />
                                    </div>
                                    <div className={styles["content"]}>
                                        <div className={`main-heading ${styles['platform-heading']}`}>Integration and Customization Services</div>
                                        <div className={styles["text"]}>Tailor your system with customization and integration. Seamlessly integrate APIs for enhanced functionality, automate workflows to match business needs, and white-label for a branded, seamless customer experience.</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["platform-card"]}>
                                <div className={styles["platform-card-content"]}>
                                    <div className={styles["icon"]}>
                                        <Image width={40} height={36}  src='/assets/p5.webp' alt="p1" />
                                    </div>
                                    <div className={styles["content"]}>
                                        <div className={`main-heading ${styles['platform-heading']}`}>Regulatory Compliance and Security</div>
                                        <div className={styles["text"]}>Prioritize security and compliance. Encrypt customer data, adhere to industry regulations and implement access controls to safeguard sensitive information and ensure privacy and security.</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["platform-card"]}>
                                <div className={styles["platform-card-content"]}>
                                    <div className={styles["icon"]}>
                                        <Image width={40} height={36}  src='/assets/p6.webp' alt="p1" />
                                    </div>
                                    <div className={styles["content"]}>
                                        <div className={`main-heading ${styles['platform-heading']}`}>Reporting and Analytics</div>
                                        <div className={styles["text"]}>Drive insights with analytics and reporting. Track chat interactions, monitor key metrics, and generate custom reports to optimize support efforts and enhance customer satisfaction.</div>
                                    </div>
                                    <div className={styles["content-img"]}>
                                        <Image width={272} height={202}  src='/assets/p6-contentImage.webp' alt="contentImage" />
                                    </div>
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
export default PlatformSection;