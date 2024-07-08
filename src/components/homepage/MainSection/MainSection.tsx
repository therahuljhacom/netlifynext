import React from "react";
import styles from './MainSection.module.css';
const MainSection = () => {
    return (
        <>
            <section className={styles["main-section"]}>
                <div className="wrapper">
                    <div className={styles["banner-content"]}>
                        <div className={`main-heading ${styles["ban-heading"]}`}>Automate Interactions, Personalize Transactions and Customer Services with Conversational AI</div>
                        <div className={`sub-heading ${styles["ban-sub-heading"]}`}>
                            At ThinkChat, our solution foundation lies in the collaboration between human insight and AI capabilities. Our experts create the most advanced strategies that are unique, best, and effective. By blending your expert vision with our AI&apos;s extensive data analysis and creativity.
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MainSection;