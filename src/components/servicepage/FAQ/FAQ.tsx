'use client';
import React from "react";
import { useState } from 'react';
import styles from './FAQ.module.css';
import FAQItem from './FAQItem';
interface FAQItem {
    id: number;
    question: string;
    answer: string;
}
interface IFaqProps {
    faq: FAQItem[]
}
const FAQ: React.FC<IFaqProps> = ({ faq }) => {
    const [activeFAQ, setActiveFAQ] = useState(1);
    const handleFaqtoggle = (id: number | null) => {
        setActiveFAQ(id !== null ? id : 1)
    }
    return (
        <>
            <section className={styles["faq-section"]} id="faqID">
                <div className="wrapper">
                    <div className={styles["faq-content"]}>
                        <div className="main-heading">Frequently asked questions</div>
                        <div className={styles["faqs"]}>
                            {
                                faq.map((item) => {
                                    return <FAQItem key={item.id} id={item.id} isActive={activeFAQ === item.id} ques={item.question} ans={item.answer} handleFunction={handleFaqtoggle} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default FAQ;