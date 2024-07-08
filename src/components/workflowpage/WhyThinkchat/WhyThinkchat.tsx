'use client';
import React, { useState } from "react";
import Image from "next/image";
import styles from './WhyThinkchat.module.css';
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
interface accordionItem {
    id: number,
    title: string,
    description: string,
    icon: string
}
interface IPROPS {
    title: string,
    description: string,
    imagePath: string,
    accordions: accordionItem[]
}
const WhyThinkchat = ({ title, description, imagePath, accordions }: IPROPS) => {
    const [activeID, setActiveID] = useState(1);
    return (
        <>
            <section className={styles.whythinkchat}>
                <div className="wrapper">
                    <div className={styles.content}>
                        <div className={`main-heading ${styles.heading}`}>{title}</div>
                        <div className={`sub-heading ${styles.subHeading}`}>{description}</div>
                    </div>
                    <div className={styles.boxes}>
                        <div className={styles.left}>
                            <Image width={600} height={600} src={imagePath} alt="Image" />
                        </div>
                        <div className={styles.right}>
                            <div className={styles.cards}>
                                {accordions.map((e) => {
                                    return (
                                        <>
                                            <div onClick={() => { setActiveID(e.id) }} key={e.id} className={`${styles.card} ${activeID === e.id ? styles.active : ''}`}>
                                                <div className={styles.icon}>
                                                    <Image width={40} height={40} src={e.icon} alt="Icon" />
                                                </div>
                                                <div className={styles.cardContent}>
                                                    <div className={`main-heading ${styles.cardHeading}`} >{e.title}</div>
                                                    <div className={`sub-heading ${styles.cardSubHeading}`}>{e.description}</div>
                                                </div>
                                                {activeID === e.id ? <SlArrowUp className={styles.arrowIcon} /> : <SlArrowDown className={styles.arrowIcon} />}


                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default WhyThinkchat;