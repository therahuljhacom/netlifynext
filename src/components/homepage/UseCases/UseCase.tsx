'use client';
import Image from 'next/image';
import React from "react";
import styles from './UseCase.module.css';
import { useState } from 'react';
import Link from 'next/link';
const UseCase = () => {
    const [activeTab, setActivetab] = useState("Customer Support and Services");
    const updateTabs = (tabContent: string) => {
        setActivetab(tabContent);
    }
    return (
        <>
            <section className={styles["use-case"]}>
                <div className="wrapper">
                    <div className={styles["use-case-content"]}>
                        <div className={`main-heading ${styles['usecase-heading']}`}>Case study</div>
                        <div className={`sub-heading ${styles['usecase-sub-heading']}`}>Empowering multiple sectors with our versatile conversational AI services.</div>
                        <div className={styles["tabs-container"]}>
                            <ul className={styles["tabs"]}>
                                <li className={activeTab === "Real Estate" ? `${styles["tab-item"]} ${styles["active"]}` : `${styles["tab-item"]}`} onClick={() => updateTabs("Real Estate")}>
                                    {activeTab === "Real Estate" ? <Image width={30} height={30} src="/assets/home-gradiant.svg" className={styles["tab-icon"]} alt='altImage' /> : <Image width={30} height={30} src="/assets/home-black.svg" className={styles["tab-icon"]} alt='altImage' />}
                                    Real Estate
                                </li>
                                <li className={activeTab === "Customer Support and Services" ? `${styles["tab-item"]} ${styles["active"]}` : `${styles["tab-item"]}`} onClick={() => updateTabs("Customer Support and Services")}>
                                    {activeTab === "Customer Support and Services" ? <Image width={30} height={30} src="/assets/customer-gradiant.svg" className={styles["tab-icon"]} alt="Icon" /> : <Image width={30} height={30} src="/assets/customer-black.svg" className={styles["tab-icon"]} alt="Icon" />}
                                    Customer Support and Services
                                </li>
                                <li className={activeTab === "Sales & Marketing" ? `${styles["tab-item"]} ${styles["active"]}` : `${styles["tab-item"]}`} onClick={() => updateTabs("Sales & Marketing")}>
                                    {activeTab === "Sales & Marketing" ? <Image width={30} height={30} src="/assets/sale-gradiant.svg" className={styles["tab-icon"]} alt='altImage' /> : <Image width={30} height={30} src="/assets/sale-black.svg" className={styles["tab-icon"]} alt='altImage' />}
                                    Sales & Marketing
                                </li>
                                <li className={activeTab === "Healthcare" ? `${styles["tab-item"]} ${styles["active"]}` : `${styles["tab-item"]}`} onClick={() => updateTabs("Healthcare")}>
                                    {activeTab === "Healthcare" ? <Image width={30} height={30} src="/assets/health-gradiant.svg" className={styles["tab-icon"]} alt="Icon" /> : <Image width={30} height={30} src="/assets/health-black.svg" className={styles["tab-icon"]} alt="Icon" />}
                                    Healthcare
                                </li>
                                <li className={activeTab === "Hospitality and Travel" ? `${styles["tab-item"]} ${styles["active"]}` : `${styles["tab-item"]}`} onClick={() => updateTabs("Hospitality and Travel")}>
                                    {activeTab === "Hospitality and Travel" ? <Image width={30} height={30} src="/assets/hospitality-gradiant.svg" className={styles["tab-icon"]} alt='altImage' /> : <Image width={30} height={30} src="/assets/hospitality-black.svg" className={styles["tab-icon"]} alt='altImage' />}
                                    Hospitality and Travel
                                </li>
                                <li className={activeTab === "Human Resources" ? `${styles["tab-item"]} ${styles["active"]}` : `${styles["tab-item"]}`} onClick={() => updateTabs("Human Resources")}>
                                    {activeTab === "Human Resources" ? <Image width={30} height={30} src="/assets/human-gradiant.svg" className={styles["tab-icon"]} alt='altImage' /> : <Image width={30} height={30} src="/assets/human-black.svg" className={styles["tab-icon"]} alt='altImage' />}
                                    Human Resources
                                </li>
                            </ul>
                        </div>
                        <div className={styles["tabs-content"]}>
                            <div className={activeTab === "Real Estate" ? `${styles["tab-content"]} ${styles["active"]}` : `${styles["tab-content"]}`}>
                                <div className={styles["left-content"]}>
                                    <div className={`main-heading ${styles['usecase-heading']}`}>Real Estate</div>
                                    <div className={`sub-heading ${styles['usecase-sub-heading']}`}>
                                        <p>ThinkChat AI solutions can leverage data insights and automation to empower real estate professionals to make informed decisions and provide unparalleled service in a competitive market. They can be utilized to optimize property listings, predict real estate market trends, improve realtor’s efficiency and closing rates, and tailor satisfactory customer experiences.</p>
                                    </div>
                                    <div className={styles["tab-content-btn"]}>
                                        <Link href={"/workflows/real-estate"}><button>View More Details</button></Link>
                                    </div>
                                </div>
                                <div className={styles["right-content"]}>
                                    <Image width={644} height={530} src="/assets/tab-real-estate.webp" alt="tabContentImage1" />
                                </div>
                            </div>
                            <div className={activeTab === "Customer Support and Services" ? `${styles["tab-content"]} ${styles["active"]}` : `${styles["tab-content"]}`}>
                                <div className={styles["left-content"]}>
                                    <div className={`main-heading ${styles['usecase-heading']}`}>Customer Support and Services</div>
                                    <div className={`sub-heading ${styles['usecase-sub-heading']}`}>
                                        <p>ThinkChat provides advanced, conservational AI-driven chatbots and analytics to analyze customer interactions, anticipate customer needs, and provide efficient responses, ensuring a consistent, positive customer support experience across channels. Through our chatbots and virtual assistants, customers of our clients can have seamless communications, get fast resolution of their queries and issues, and customized support. This way, businesses can work on improving their customer&apos;s satisfaction rates and their retention.</p>
                                    </div>
                                    <div className={styles["tab-content-btn"]}>
                                        <Link href={"/contact"}><button>View More Details</button></Link>
                                    </div>
                                </div>
                                <div className={styles["right-content"]}>
                                    <Image width={644} height={530} src="/assets/tab-customer-support.webp" alt="tabContentImage1" />
                                </div>
                            </div>
                            <div className={activeTab === "Sales & Marketing" ? `${styles["tab-content"]} ${styles["active"]}` : `${styles["tab-content"]}`}>
                                <div className={styles["left-content"]}>
                                    <div className={`main-heading ${styles['usecase-heading']}`}>Sales & Marketing</div>
                                    <div className={`sub-heading ${styles['usecase-sub-heading']}`}>
                                        <p>ThinkChat&apos;s AI tools can be of great help to sales and marketing agents. These tools can help sales teams in businesses analyze customer behavior, customize marketing campaigns, and automate lead generation. The use of machine learning and data-driven insights can help optimize sales and marketing efforts made in businesses, thereby improving their revenue growth and market success.</p>
                                    </div>
                                    <div className={styles["tab-content-btn"]}>
                                        <Link href={"/contact"}><button>View More Details</button></Link>
                                    </div>
                                </div>
                                <div className={styles["right-content"]}>
                                    <Image width={644} height={530} src="/assets/tab-sales-marketting.webp" alt="tabContentImage1" />
                                </div>
                            </div>
                            <div className={activeTab === "Healthcare" ? `${styles["tab-content"]} ${styles["active"]}` : `${styles["tab-content"]}`}>
                                <div className={styles["left-content"]}>
                                    <div className={`main-heading ${styles['usecase-heading']}`}>Healthcare</div>
                                    <div className={`sub-heading ${styles['usecase-sub-heading']}`}>
                                        <p>ThinkChat AI solutions utilize advanced algorithms and predictive analysis, which can be leveraged in healthcare industries to well-organize patient care, automate hospital or clinic administrative tasks, and deliver insights for improved diagnoses. These can enable our healthcare professional clients to focus on the delivery of quality treatment. We understand that healthcare industries rapidly evolve and we ensure that our AI solutions reduce healthcare services costs, improve the efficiency of healthcare services, and enhance patient treatment outcomes.</p>
                                    </div>
                                    <div className={styles["tab-content-btn"]}>
                                        <Link href={"/workflows/healthcare"}><button>View More Details</button></Link>
                                    </div>
                                </div>
                                <div className={styles["right-content"]}>
                                    <Image width={644} height={530} src="/assets/tab-healthcare.webp" alt="tabContentImage1" />
                                </div>
                            </div>
                            <div className={activeTab === "Hospitality and Travel" ? `${styles["tab-content"]} ${styles["active"]}` : `${styles["tab-content"]}`}>
                                <div className={styles["left-content"]}>
                                    <div className={`main-heading ${styles['usecase-heading']}`}>Hospitality and Travel</div>
                                    <div className={`sub-heading ${styles['usecase-sub-heading']}`}>
                                        <p>ThinkChat AI solution can enhance customer experiences by streamlining operations. Our AI-driven tools assist in personalizing guest interactions, from tailored recommendations to automated booking and check-in processes, ensuring every touchpoint is optimized for guest satisfaction. This approach not only improves operational efficiency but also elevates the overall guest experience.</p>
                                    </div>
                                    <div className={styles["tab-content-btn"]}>
                                        <Link href={"/contact"}><button>View More Details</button></Link>
                                    </div>
                                </div>
                                <div className={styles["right-content"]}>
                                    <Image width={644} height={530} src="/assets/tab-hospitality.webp" alt="tabContentImage1" />
                                </div>
                            </div>
                            <div className={activeTab === "Human Resources" ? `${styles["tab-content"]} ${styles["active"]}` : `${styles["tab-content"]}`}>
                                <div className={styles["left-content"]}>
                                    <div className={`main-heading ${styles['usecase-heading']}`}>Human Resources</div>
                                    <div className={`sub-heading ${styles['usecase-sub-heading']}`}>
                                        <p>ThinkChat AI is transforming Human Resources management by automating routine tasks. By integrating ThinkChat AI, HR departments can focus more on strategic initiatives and less on administrative burdens, enhancing both employee satisfaction and organizational effectiveness.</p>
                                    </div>
                                    <div className={styles["tab-content-btn"]}>
                                        <Link href={"/contact"}><button>View More Details</button></Link>
                                    </div>
                                </div>
                                <div className={styles["right-content"]}>
                                    <Image width={644} height={530} src="/assets/tab-hr.webp" alt="tabContentImage1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default UseCase;