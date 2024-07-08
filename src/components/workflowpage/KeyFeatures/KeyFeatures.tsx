import React from "react";
import Image from "next/image";
import styles from './KeyFeatures.module.css';
interface cardItem {
    id: number,
    title: string,
    description: string,
    icon: string
}
interface IPROPS {
    title: string,
    cards: cardItem[]
}
const KeyFeatures = ({title,cards}:IPROPS) => {
    return (
        <>
            <section className={styles.values}>
                <div className="wrapper">
                    <div className={styles.content}>
                        <div className={`main-heading ${styles.heading}`}>{title}</div>
                    </div>
                    <div className={styles.cards}>
                        {cards.map((e) => {
                            return (
                                <>
                                    <div key={e.id} className={styles.card}>
                                        <Image className="icon" width={80} height={55} src={e.icon} alt="Icon" />
                                        <div className={styles.cardContent}>
                                            <div className={`main-heading ${styles.cardHeading}`}>{e.title}</div>
                                            <div className={`sub-heading ${styles.cardSubHeading}`}>{e.description}</div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
export default KeyFeatures;