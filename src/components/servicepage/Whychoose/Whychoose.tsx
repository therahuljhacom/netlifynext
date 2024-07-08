import React from "react";
import styles from './Whychoose.module.css';
// const statsData = [
//     {
//         id: 1,
//         number: '01',
//         content: 'Intuitive and User-Friendly Interface'
//     }, {
//         id: 2,
//         number: '02',
//         content: 'Customizable Solutions'
//     }, {
//         id: 3,
//         number: '03',
//         content: 'Enhanced Customer Engagement'
//     }, {
//         id: 4,
//         number: '04',
//         content: 'Scalable and Flexible Services'
//     }, {
//         id: 5,
//         number: '05',
//         content: 'All your Apps at One Place'
//     }, {
//         id: 6,
//         number: '06',
//         content: 'Robust Security and Compliance'
//     }
// ]
interface whyCards {
    id: number,
    number: string,
    title: string
}
interface IWhyProps {
    title: string,
    description: string,
    cards: whyCards[]
}
const Whychoose: React.FC<IWhyProps> = ({ title, description, cards }) => {
    return (
        <>
            <section className={styles.whychoose}>
                <div className="wrapper">
                    <div className={`main-heading ${styles.heading}`}>{title}</div>
                    <div className={`sub-heading ${styles.subHeading}`} dangerouslySetInnerHTML={{ __html: description }}></div>
                    <div className={styles.cards}>
                        {cards.map((e) => {
                            return <div key={e.id} className={styles.card}>
                                <div className={styles.number}>{e.number}</div>
                                <div className={styles.cardContent}>{e.title}</div>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Whychoose;