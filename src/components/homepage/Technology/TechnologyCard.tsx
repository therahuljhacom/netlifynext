import React from "react";
import styles from './Technology.module.css';
import Image from 'next/image';
interface CardData {
    content: string;
    title: string;
    cardImage: string;
}
const TechnologyCard: React.FC<CardData> = (cardData) => {
    return (
        <>
            <div className={styles["border-card"]}>
                <div className={styles["tech-card"]}>
                    <div className={styles["tech-image"]}>
                        <Image width={100} height={50}  src={cardData.cardImage} alt="" />
                    </div>
                    <div className={styles["tech-title"]}>{cardData.title}</div>
                    <div className={styles["tech-text"]}>{cardData.content}</div>
                </div>
            </div>
        </>
    )
}
export default TechnologyCard;