import React from "react";
import Image from "next/image";
import styles from './UseCase.module.css';
interface cardItem {
    id: number,
    title: string,
    description: string,
    icon: string
}
interface IPROPS {
    title: string,
    imagePath: string,
    cards: cardItem[]
}
const UseCase = ({ title, imagePath, cards }: IPROPS) => {
    return (
        <>
            <section className={styles.usecase}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <div className={`main-heading ${styles.heading}`}>{title}</div>
                        <div className={styles.cards}>
                            {cards.map((e) => {
                                return (
                                    <>
                                        <div key={e.id} className={styles.card}>
                                            <Image className="icon" width={80} height={50} src={e.icon} alt="Icon" />
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
                    <Image className={styles.mainImage} width={700} height={900} src={imagePath} alt="Image" />
                </div>
            </section>
        </>
    )
}
export default UseCase;