import React from "react";
import Image from "next/image";
import styles from './TopBanner.module.css';
import Link from "next/link";
interface IPROPS {
    title: string,
    description: string,
    buttonURL: string,
    patternPath: string,
    imagePath: string
}
const TopBanner = ({ title, description, buttonURL, patternPath, imagePath }: IPROPS) => {
    return (
        <>
            <section className={styles.topbanner}>
                <Image width={1920} height={1170} className={styles.pattern} src={patternPath} alt="Image" />
                <div className="wrapper">
                    <div className={styles.content}>
                        <div className={styles.left}>
                            <div className={`main-heading ${styles.heading}`}>{title}</div>
                            <div className={`sub-heading ${styles.subHeading}`}>{description}</div>
                            <Link href={buttonURL} className={styles.bannerBtn}><button>Get in Touch</button></Link>
                        </div>
                        <div className={styles.chatBox}>
                            <Image className={styles.workflowImage} width={915} height={694} src={imagePath} alt="Image" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default TopBanner;