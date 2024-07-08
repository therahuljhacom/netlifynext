import React from "react";
import styles from './Business.module.css';
import Image from 'next/image';
import Link from "next/link";
interface BusinessProps {
    title: string;
    description: string;
}
const Business = ({ title, description }: BusinessProps) => {
    return (
        <>
            <section className={styles["business"]}>
                <div className="wrapper">
                    <div className={styles["business-content"]}>
                        <div className={styles["bus-cont"]}>
                            <div className={styles["business-stack-imgs"]}>
                                <Image width={50} height={50} src="/assets/b1.webp" alt="Image" />
                                <Image width={50} height={50} src="/assets/b2.webp" alt="Image" />
                                <Image width={50} height={50} src="/assets/b3.webp" alt="Image" />
                                <Image width={50} height={50} src="/assets/b4.webp" alt="Image" />
                                <Image width={50} height={50} src="/assets/b5.webp" alt="Image" />
                            </div>
                            <div className="main-heading">{title}</div>
                            <div className={`sub-heading ${styles['bus-sub-heading']}`}>{description}</div>
                            <div className={styles["business-btn"]}>
                                {/* <a><button>Book a Demo</button></a> */}
                                <Link href={'/contact'}><button>Contact Us</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Business;