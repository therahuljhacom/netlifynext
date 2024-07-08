import React from "react";
import Image from "next/image";
import styles from './CardGrid.module.css';
// const cardData = [
//     {
//         id: 1,
//         title: 'Boost Customer Interactions',
//         description: 'Manage all customer interactions from a single interface, ensuring consistency and efficiency in providing prompt, accurate, and personalised responses.',
//         img: '/assets/service1.png'
//     },
//     {
//         id: 2,
//         title: 'Improved Efficiency',
//         description: 'Automate routine tasks and streamline workflows to increase productivity and reduce response times.',
//         img: '/assets/service2.png'
//     },
//     {
//         id: 3,
//         title: 'Data-Driven Insights',
//         description: 'Leverage real-time analytics to gain insights into customer behaviour and improve service strategies.',
//         img: '/assets/service3.png'
//     },
//     {
//         id: 4,
//         title: 'High Security and Standards',
//         description: 'We prioritise robust security, ensuring your data is protected with industry-standard encryption.',
//         img: '/assets/service4.png'
//     },
// ]
interface gridCards {
    id: number,
    title: string,
    icon: string,
    description: string,
}
interface IGridProps {
    title: string,
    description: string,
    cards: gridCards[]
}
const CardGrid: React.FC<IGridProps> = ({ title, description, cards }) => {
    return (
        <>
            <section className={styles.CardGrid}>
                <div className="wrapper">
                    <div className={styles.content}>
                        <div className={`main-heading ${styles.heading}`}>{title}</div>
                        <div className={`sub-heading ${styles.subHeading}`}>{description}</div>
                    </div>
                    <div className={styles.cards}>
                        {cards.map((e) => {
                            return (
                                <div key={e.id} className={styles.card}>
                                    <div className={styles.icon}>
                                        <Image width={180} height={180} src={e.icon} alt="Image" />
                                    </div>
                                    <div className={styles.cardContent}>
                                        <div className={`main-heading ${styles.cardHeading}`}>{e.title}</div>
                                        <div className={`sub-heading ${styles.cardSubHeading}`}>{e.description}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
export default CardGrid;