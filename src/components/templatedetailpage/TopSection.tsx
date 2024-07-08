import React from "react";
import styles from './TopSection.module.css';
import Image from "next/image";
interface IProps {
    id: number,
    chatbot_name: string,
    chatbot_description: string,
    chatbot_link: string
}
const TopSection: React.FC<IProps> = ({ id, chatbot_name, chatbot_description, chatbot_link }) => {
    return (
        <>
            <section className={styles.topSection}>
                <div className="wrapper">
                    <div className={styles.content}>
                        <div className={styles.left}>
                            <div className={`main-heading ${styles.heading}`}>{chatbot_name}</div>
                            <div className={`sub-heading ${styles.sbHeading}`}>{chatbot_description}</div>
                            <div className={styles.contentBtns}>
                                <button>Use this template</button>
                                <button>Get a free demo</button>
                            </div>
                        </div>
                        <div className={styles.smartphone}>
                            <div className={styles.contentSmart}>
                                <iframe src={chatbot_link} className={styles.iframe} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default TopSection;