 import React from "react";
import styles from './Technology.module.css';
import TechnologyCard from './TechnologyCard';
const Technology = () => {
    return (
        <>
            <section className={styles.technology}>
                <div className="wrapper">
                    <div className={styles["tech-content"]}>
                        <div className={`main-heading ${styles['tech-heading']}`}>Unveiling Our Conversation AI-Powered Solutions Technology Stack</div>
                      <div className={styles["tech-cards-container"]}>
                      <div className={styles["tech-cards"]}>
                            <TechnologyCard content="Enhances chat interfaces with human-like text, fostering engaging conversations and efficient customer support." title="GPT-4" cardImage='/assets/tech1.webp' />
                            <TechnologyCard content="Provides relevant and contextual responses, improving user understanding and satisfaction in chat interactions." title="Claude" cardImage='/assets/tech2.webp' />
                            <TechnologyCard content="It enhances the user chat experience by delivering relevant, contextual responses for increased user satisfaction." title="Gemini" cardImage='/assets/tech3.webp' />
                            <TechnologyCard content="Provides personalized experiences, boosting user engagement and retention with tailored information." title="Llama" cardImage='/assets/tech4.webp' />
                            <TechnologyCard content="Enables seamless customer service interactions with intuitive responses, improving satisfaction and resolving queries efficiently." title="Gemma" cardImage='/assets/tech5.webp' />
                            <TechnologyCard content="Enhances visual content with detailed, high-resolution images, creating visually appealing and engaging elements." title="DALL-E" cardImage='/assets/tech6.webp' />
                            <TechnologyCard content="Ensures solutions are stable, secure, and privacy-focused, building trust and reliability with users." title="Stability AI" cardImage='/assets/tech7.webp' />
                            <TechnologyCard content="Deploys ML models for faster, more diverse website functions, improving performance and versatility of AI applications." title="Replicate" cardImage='/assets/tech8.webp' />
                        </div>
                      </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Technology;