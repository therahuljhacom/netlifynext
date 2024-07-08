import React from "react";
import styles from './FAQ.module.css';
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";


interface FAQItemProps {
    id: number;
    ques: string;
    ans: string;
    isActive: boolean;
    handleFunction: (id: number | null) => void;
}

const FAQItem: React.FC<FAQItemProps> = (props) => {
    return (
        <>
            <div className={styles["faq"]}>
                <div className={styles["question"]}>
                    <div className={styles["question-text"]} onClick={() => { props.handleFunction(props.id) }}>
                        {props.ques}
                    </div>
                    {props.isActive ?
                        <AiOutlineMinus className={styles["plus-icon"]} onClick={() => { props.handleFunction(null) }} /> :
                        <AiOutlinePlus className={styles["plus-icon"]} onClick={() => { props.handleFunction(props.id) }} />}
                </div>
                {props.isActive && <div className={styles["answer"]}>{props.ans}</div>}
            </div>
        </>
    );
};

export default FAQItem;