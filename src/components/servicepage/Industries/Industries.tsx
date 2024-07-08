'use client'
import React, { useState } from "react";
import styles from './Industries.module.css';
import Image from "next/image";
const tabs = [
    {
        id: 1,
        tabTitle: 'Real State',
        tabImgPath: '/assets/home-black.svg',
        tabContentImagePath: '/assets/serviceTab.png',
        tabContentTitle: 'Streamline property inquiries and client interactions seamlessly.',
        tabContentText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque sed maximus ips um proin maximus enim et malesuada eleifend. Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas nullam lobortis augue commodo mollis turpis.`,
        tabContentURL: ''
    }, {
        id: 2,
        tabTitle: 'Customer Support',
        tabImgPath: '/assets/customer-black.svg',
        tabContentImagePath: '/assets/serviceTab.png',
        tabContentTitle: 'Easy customer interaction with automated, tailored responses.',
        tabContentText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque sed maximus ips um proin maximus enim et malesuada eleifend. Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas nullam lobortis augue commodo mollis turpis.`,
        tabContentURL: ''
    }, {
        id: 3,
        tabTitle: 'Sales & Marketing',
        tabImgPath: '/assets/sale-black.svg',
        tabContentImagePath: '/assets/serviceTab.png',
        tabContentTitle: 'Drive conversions with targeted, automated engagements.',
        tabContentText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque sed maximus ips um proin maximus enim et malesuada eleifend. Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas nullam lobortis augue commodo mollis turpis.`,
        tabContentURL: ''
    }, {
        id: 4,
        tabTitle: 'Health Care',
        tabImgPath: '/assets/health-black.svg',
        tabContentImagePath: '/assets/serviceTab.png',
        tabContentTitle: 'Improve patient communication and manage appointments effortlessly.',
        tabContentText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque sed maximus ips um proin maximus enim et malesuada eleifend. Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas nullam lobortis augue commodo mollis turpis.`,
        tabContentURL: ''
    }, {
        id: 5,
        tabTitle: 'Real State',
        tabImgPath: '/assets/home-black.svg',
        tabContentImagePath: '/assets/serviceTab.png',
        tabContentTitle: 'Real State dolor sit amet consect etur adipiscing elit.',
        tabContentText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque sed maximus ips um proin maximus enim et malesuada eleifend. Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas nullam lobortis augue commodo mollis turpis.`,
        tabContentURL: ''
    }, {
        id: 6,
        tabTitle: 'Non-Profit',
        tabImgPath: '/assets/hospitality-black.svg',
        tabContentImagePath: '/assets/serviceTab.png',
        tabContentTitle: 'Non-Profit dolor sit amet consect etur adipiscing elit.',
        tabContentText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque sed maximus ips um proin maximus enim et malesuada eleifend. Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas nullam lobortis augue commodo mollis turpis.`,
        tabContentURL: ''
    }, {
        id: 7,
        tabTitle: 'Customer Support',
        tabImgPath: '/assets/human-black.svg',
        tabContentImagePath: '/assets/serviceTab.png',
        tabContentTitle: 'Customer Support dolor sit amet consect etur adipiscing elit.',
        tabContentText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque sed maximus ips um proin maximus enim et malesuada eleifend. Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas nullam lobortis augue commodo mollis turpis.`,
        tabContentURL: ''
    }, {
        id: 8,
        tabTitle: 'Real Estate',
        tabImgPath: '/assets/home-black.svg',
        tabContentImagePath: '/assets/serviceTab.png',
        tabContentTitle: 'Real State dolor sit amet consect etur adipiscing elit.',
        tabContentText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque sed maximus ips um proin maximus enim et malesuada eleifend. Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas nullam lobortis augue commodo mollis turpis.`,
        tabContentURL: ''
    },
]
const Industries = () => {
    const [tabActive, setTabActive] = useState(2);
    const handleClick = (id: number) => {
        setTabActive(id);
    };
    return (
        <>
            <section className={styles.industries}>
                <div className="wrapper">
                    <div className={styles.content}>
                        <div className={`main-heading ${styles.heading}`}>Thinkchat can power all industries</div>
                        <div className={`sub-heading ${styles.subHeading}`}>Custom workflows are the USP of our chatbot, while the platform come free of cost. Pay as you customise.</div>
                    </div>
                    <div className={styles.tabsContainer}>
                        <ul className={styles.tabs}>
                            <div className={styles.tabScroll}>
                                {tabs.map((e) => {
                                    return <li key={e.id} onClick={() => { handleClick(e.id) }} className={tabActive === e.id ? `${styles.active}` : ''}><Image src={e.tabImgPath} alt="Icon" width={50} height={50} />{e.tabTitle}</li>
                                })}
                            </div>
                        </ul>
                        <div className={styles.tabContents}>
                            {tabs.map((e) => {
                                return (
                                    <div key={e.id} className={`${styles.tabContent} ${tabActive === e.id ? styles.active : ''}`}>
                                        <Image src={e.tabContentImagePath} alt="tab-image" width={1050} height={276} />
                                        <div className={`main-heading ${styles.tabHeading}`}>{e.tabContentTitle}</div>
                                        <div className={`sub-heading ${styles.tabSubHeading}`}>{e.tabContentText}</div>
                                        <div className={styles.buttonContainer}><button>View More Details</button></div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Industries;