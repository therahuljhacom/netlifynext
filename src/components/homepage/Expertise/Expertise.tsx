import React from "react";
import styles from './Expertise.module.css';
import Image from 'next/image';
const Expertise = () => {
    return (
        <>
            <section className={styles["expertise"]}>
                <div className="wrapper">
                    <div className={styles["expertise-content"]}>
                        <div className={`main-heading ${styles['expertise-heading']}`}>Our Proficiency in Conversational AI Development</div>
                       <div className={styles["expertise-cards-container"]}>
                       <div className={styles["expertise-cards"]}>
                            <div className={styles["expertise-card"]}>
                                <div className={styles["exp-img"]}>
                                    <Image width={250} height={250}  src='/assets/exp1.webp' alt="Experi" />
                                </div>
                                <div className={styles["exp-content"]}>
                                    <div className={styles["exp-title"]}>Machine Learning</div>
                                    <div className={styles["exp-text"]}>ThinkChat&apos;s conversational AI system uses machine learning to learn from human interactions and over time improve the responses in future conversations without explicit programming. This way, it can help make interactions more personal and provide solutions as anticipated for user needs, improving customer engagement and satisfaction and ultimately business outcomes.</div>
                                </div>
                            </div>
                            <div className={styles["expertise-card"]}>
                                <div className={styles["exp-img"]}>
                                    <Image width={250} height={250}  src='/assets/exp2.webp' alt="Experi" />
                                </div>
                                <div className={styles["exp-content"]}>
                                    <div className={styles["exp-title"]}>Transfer Learning</div>
                                    <div className={styles["exp-text"]}>ThinkChat transfer learning helps considerably reduce development time and resources, empowering  clients to quickly and affordably deploy advanced conversational AI solutions, while maintaining impressive performance.</div>
                                </div>
                            </div>
                            <div className={styles["expertise-card"]}>
                                <div className={styles["exp-img"]}>
                                    <Image width={250} height={250}  src='/assets/exp3.webp' alt="Experi" />
                                </div>
                                <div className={styles["exp-content"]}>
                                    <div className={styles["exp-title"]}>Fine Tuning</div>
                                    <div className={styles["exp-text"]}>ThinkChat pre-trained models help meet specific business needs and improve the relevance and accuracy of conversational AI responses. It ensures that conversational AI agents can efficiently steer queries and commands of specific industries, quickly resolving their needs and making customers highly satisfied.</div>
                                </div>
                            </div>
                            <div className={styles["expertise-card"]}>
                                <div className={styles["exp-img"]}>
                                    <Image width={250} height={250}  src='/assets/exp4.webp' alt="Experi" />
                                </div>
                                <div className={styles["exp-content"]}>
                                    <div className={styles["exp-title"]}>Deep Learning</div>
                                    <div className={styles["exp-text"]}>ThinkChat&apos;s Conversational AI system employs deep-learning techniques to process large data sets with a fine understanding, thereby providing more accurate, human-like interactions between machines and humans. With a proper depth of learning human language, our conversational AI can effectively recognize user’s emotions, text, and speech, thereby providing an empathetic user experience.</div>
                                </div>
                            </div>
                            <div className={styles["expertise-card"]}>
                                <div className={styles["exp-img"]}>
                                    <Image width={250} height={250}  src='/assets/exp5.webp' alt="Experi" />
                                </div>
                                <div className={styles["exp-content"]}>
                                    <div className={styles["exp-title"]}>Generative Models</div>
                                    <div className={styles["exp-text"]}>ThinkChat utilizes AI generative models to generate both original and contextually relevant content, from text to images. By enhancing personalization and creativity in our client’s customer interactions, we help businesses stand out in their communication and marketing strategies. </div>
                                </div>
                            </div>
                            <div className={styles["expertise-card"]}>
                                <div className={styles["exp-img"]}>
                                    <Image width={250} height={250}  src='/assets/exp6.webp' alt="Experi" />
                                </div>
                                <div className={styles["exp-content"]}>
                                    <div className={styles["exp-title"]}>Natural Language Processing (NLP)</div>
                                    <div className={styles["exp-text"]}>ThinkChat has expertise in crafting conversational AI systems comprising NLP to interpret, analyze, and deliver human-like responses. It allows computer programs to understand, process, and respond to natural human language as it is written or spoken.  Our efforts are to help our client’s customers have more intuitive and effective conversations on a digital platform.</div>
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
export default Expertise;