import React from "react";
import styles from './AISolution.module.css';
import Image from 'next/image';
const AISolution = () => {
    return (
        <>
            <section className={styles["ai-solution"]}>
                <div className="wrapper">
                    <div className={styles["ai-solution-content"]}>
                        <div className="main-heading">Technology stack we use to build Conversational
                            AI-powered solutions</div>
                        <div className={styles["ai-grid"]}>
                            <div className={styles["left-grid"]}>
                                <div className={styles["ai-card"]}>
                                    <div className={`sub-heading ${styles['ai-sub-heading']}`}>Frameworks</div>
                                    <div className={styles["ai-icons"]}>
                                        <div className={styles["ai-icon"]}>
                                            <Image width={50} height={50} src='/assets/f1.webp' alt="f1Image" />
                                            <div className={styles["ai-title"]}>Dialogflow</div>
                                        </div>
                                        <div className={styles["ai-icon"]}>
                                            <Image width={50} height={50} src='/assets/f2.webp' alt="f1Image" />
                                            <div className={styles["ai-title"]}>Rasa</div>
                                        </div>
                                        <div className={styles["ai-icon"]}>
                                            <Image width={50} height={50} src='/assets/f3.webp' alt="f1Image" />
                                            <div className={styles["ai-title"]}>Microsoft Bot</div>
                                        </div>
                                        <div className={styles["ai-icon"]}>
                                            <Image width={50} height={50} src='/assets/f4.webp' alt="f1Image" />
                                            <div className={styles["ai-title"]}>Amazon Lex</div>
                                        </div>
                                        <div className={styles["ai-more"]}>
                                            <Image width={50} height={50} src='/assets/ai-more.svg' alt="moreImage" className={styles["ai-more-icon"]} />
                                            <div className={styles["ai-title"]}>More</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["ai-card"]}>
                                    <div className={`sub-heading ${styles['ai-sub-heading']}`}>Cloud Platforms</div>
                                    <div className={styles["ai-icons"]}>
                                        <div className={styles["ai-icon"]}>
                                            <Image width={50} height={50} src='/assets/c1.webp' alt="f1Image" />
                                            <div className={styles["ai-title"]}>AWS</div>
                                        </div>
                                        <div className={styles["ai-icon"]}>
                                            <Image width={50} height={50} src='/assets/c2.webp' alt="f1Image" />
                                            <div className={styles["ai-title"]}>Google Cloud</div>
                                        </div>
                                        <div className={styles["ai-icon"]}>
                                            <Image width={50} height={50} src='/assets/c3.webp' alt="f1Image" />
                                            <div className={styles["ai-title"]}>Azure</div>
                                        </div>
                                        <div className={styles["ai-icon"]}>
                                            <Image width={50} height={50} src='/assets/c4.webp' alt="f1Image" />
                                            <div className={styles["ai-title"]}>IBM Cloud</div>
                                        </div>
                                        <div className={styles["ai-more"]}>
                                            <Image width={50} height={50} src='/assets/ai-more.svg' alt="moreImage" className={styles["ai-more-icon"]} />
                                            <div className={styles["ai-title"]}>More</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["ai-card"]}>
                                    <div className={`sub-heading ${styles['ai-sub-heading']}`}>Libraries</div>
                                    <div className={styles["ai-icons"]}>
                                        <div className={styles["ai-icon"]}>
                                            <Image width={50} height={50} src='/assets/l1.webp' alt="f1Image" />
                                            <div className={styles["ai-title"]}>Keras</div>
                                        </div>
                                        <div className={styles["ai-icon"]}>
                                            <Image width={50} height={50} src='/assets/l2.webp' alt="f1Image" />
                                            <div className={styles["ai-title"]}>PyTorch</div>
                                        </div>
                                        <div className={styles["ai-icon"]}>
                                            <Image width={50} height={50} src='/assets/l3.webp' alt="f1Image" />
                                            <div className={styles["ai-title"]}>Transformers</div>
                                        </div>
                                        <div className={styles["ai-icon"]}>
                                            <Image width={50} height={50} src='/assets/l4.webp' alt="f1Image" />
                                            <div className={styles["ai-title"]}>Gemma C++</div>
                                        </div>
                                        <div className={styles["ai-more"]}>
                                            <Image width={50} height={50} src='/assets/ai-more.svg' alt="moreImage" className={styles["ai-more-icon"]} />
                                            <div className={styles["ai-title"]}>More</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["center-grid"]}>
                                <div className={styles["ai-logo-img"]}>
                                    <Image width={80} height={80} src='/assets/white-logo.png' alt="white-logo" />
                                </div>
                            </div>
                            <div className={styles["right-grid"]}>
                                <div className={styles["ai-model"]}>
                                    <div className={`sub-heading ${styles['ai-sub-heading']}`}>Conversational AI Models</div>
                                    <div className={styles["ai-icons-right"]}>
                                        <div className={styles["ai-icon-right"]}>
                                            <Image width={50} height={50} src='/assets/ai1.png' alt="f1Image" />
                                            <div className={styles["ai-title"]}>Natural language understanding</div>
                                        </div>
                                        <div className={styles["ai-icon-right"]}>
                                            <Image width={50} height={50} src='/assets/ai2.png' alt="f1Image" />
                                            <div className={styles["ai-title"]}>Natural language generation</div>
                                        </div>
                                        <div className={styles["ai-icon-right"]}>
                                            <Image width={50} height={50} src='/assets/ai3.png' alt="f1Image" />
                                            <div className={styles["ai-title"]}>Dialogue Management Models</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.algorithm}>
                                    <div className={`sub-heading ${styles['ai-sub-heading']}`}>Conversational AI Models</div>
                                    <div className={styles["algorithm-cards"]}>
                                        <div className={styles["algorithm-card"]}>
                                            <div className={styles["icon"]}><Image width={50} height={50} src='/assets/al1.png' alt="Al1Image" /></div>
                                            <div className={styles["title"]}>Classification</div>
                                        </div>
                                        <div className={styles["algorithm-card"]}>
                                            <div className={styles["icon"]}><Image width={50} height={50} src='/assets/al2.png' alt="Al1Image" /></div>
                                            <div className={styles["title"]}>Clustering</div>
                                        </div>
                                        <div className={styles["algorithm-card"]}>
                                            <div className={styles["icon"]}><Image width={50} height={50} src='/assets/al3.png' alt="Al1Image" /></div>
                                            <div className={styles["title"]}>Deep Learning</div>
                                        </div>
                                        <div className={styles["algorithm-card"]}>
                                            <div className={styles["icon"]}><Image width={50} height={50} src='/assets/al4.png' alt="Al1Image" /></div>
                                            <div className={styles["title"]}>Reinforcement Learning</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <video className={styles.video} loop autoPlay muted playsInline>
                    <source src='/assets/tech-stack-video.mp4' type='video/mp4' />
                </video>
            </section>
        </>
    )
}
export default AISolution;