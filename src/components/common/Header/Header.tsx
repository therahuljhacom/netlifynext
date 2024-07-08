'use client'
import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowDropDown } from "react-icons/md";
const menuLinks = {
    services: [
        {
            id: 1,
            title: "Chatbot Development",
            description: "Enhance traffic via chatbots",
            route: "/services/chatbot-development",
            icon: "/assets/menuicon1.png"
        }, {
            id: 2,
            title: "Omnichannel Platform",
            description: "AI-powered omnichannel customer connections",
            route: "/services/omnichannel-dashboard",
            icon: "/assets/menuicon2.png"
        }, {
            id: 3,
            title: "Virtual / Voice Assistant & Multilingual Conversational AI",
            description: "Advanced multilingual AI solutions",
            route: "/services/virtual-voice-assistant-and-multilingual-conversational-ai",
            icon: "/assets/menuicon3.png"
        }, {
            id: 4,
            title: "Live Agent",
            description: "Live agent boosts conversions",
            route: "/services/live-agent",
            icon: "/assets/menuicon4.png"
        }, {
            id: 5,
            title: "WhatsApp Business Automation",
            description: "Automate WhatsApp for efficiency",
            route: "/services/whatsapp-integration",
            icon: "/assets/menuicon5.png"
        }
    ],
    workflows: [
        {
            id: 1,
            title: "Non Profits",
            description: "Boost Non-Profit Engagement with AI Chatbots",
            route: "/workflows/non-profits",
            icon: "/assets/non-profit.png"
        }, {
            id: 2,
            title: "Real Estate",
            description: "Optimize Real Estate with AI Chatbots",
            route: "/workflows/real-estate",
            icon: "/assets/real-estate.png"
        }, {
            id: 3,
            title: "Travel",
            description: "Transform Travel Business with AI Chatbots",
            route: "/workflows/travel",
            icon: "/assets/travel.png"
        }, {
            id: 4,
            title: "Healthcare",
            description: "Enhance Healthcare with AI Chatbots",
            route: "/workflows/healthcare",
            icon: "/assets/healthcare.png"
        }
    ]
}
const Header = () => {
    const [isMenuActive, setMenuActive] = useState(false);
    const [isScrolledUp, setIsScrolledUp] = useState(false);
    const [dropdownActive, setDropdownActive] = useState(false);
    const [workflowDropdownActive, setWorkflowDropdownActive] = useState(false);


    useEffect(() => {
        let prevY = window.scrollY; // Initialize previous scroll position outside the event listener

        const handleScroll = () => {
            const currentY = window.scrollY;

            // Check if scrolled down
            if (currentY > prevY || currentY === 0) {
                setIsScrolledUp(false);
            }
            // Check if scrolled up
            else if (currentY < prevY) {
                setIsScrolledUp(true);
            }

            prevY = currentY; // Update previous scroll position
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`${styles.header} ${isScrolledUp ? `${styles.headerScroll}` : ``}`}>
                <div className="wrapper">
                    <div className={isMenuActive ? `${styles.navigation} ${styles.active}` : `${styles.navigation}`}>
                        <div className={styles.logo}>
                            <Link href={'/'}><Image src='/assets/logo.png' width={150} height={59} alt="" /></Link>
                            <Link href={'/'}><Image src='/assets/logo-black.png' width={150} height={59} alt="" /></Link>
                        </div>
                        <div className={isMenuActive ? `${styles.menu} ${styles.active}` : `${styles.menu}`}>
                            <li className={styles.dropdownLink}>
                                <Link href={''} onClick={() => { setDropdownActive(!dropdownActive) }}>Services <MdArrowDropDown className={styles.arrowDown} /></Link>
                                <div className={`${styles.dropdownMenu} ${dropdownActive ? styles.active : ''}`}>
                                    {menuLinks.services.map((e) => {
                                        return (
                                            <div key={e.id} className={styles.dropdownItem}>
                                                <div className={styles.icon}><Link onClick={() => { setMenuActive(!isMenuActive); setDropdownActive(false); setWorkflowDropdownActive(false) }} href={e.route}><Image width={50} height={50} src={e.icon} alt="Image" /></Link></div>
                                                <div className={styles.content}>
                                                    <div className={styles.title}><Link onClick={() => { setMenuActive(!isMenuActive); setDropdownActive(false); setWorkflowDropdownActive(false) }} href={e.route}>{e.title}</Link></div>
                                                    <div className={styles.text}><Link onClick={() => { setMenuActive(!isMenuActive); setDropdownActive(false); setWorkflowDropdownActive(false) }} href={e.route}>{e.description}</Link></div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </li>
                            <li className={styles.dropdownLink}>
                                <Link href={''} onClick={() => { setWorkflowDropdownActive(!workflowDropdownActive) }}>Workflows <MdArrowDropDown className={styles.arrowDown} /></Link>
                                <div className={`${styles.dropdownMenu} ${workflowDropdownActive ? styles.active : ''}`}>
                                    {menuLinks.workflows.map((e) => {
                                        return (
                                            <div key={e.id} className={styles.dropdownItem}>
                                                <div className={styles.icon}><Link onClick={() => { setMenuActive(!isMenuActive); setDropdownActive(false); setWorkflowDropdownActive(false) }} href={e.route}><Image width={50} height={50} src={e.icon} alt="Image" /></Link></div>
                                                <div className={styles.content}>
                                                    <div className={styles.title}><Link onClick={() => { setMenuActive(!isMenuActive); setDropdownActive(false); setWorkflowDropdownActive(false) }} href={e.route}>{e.title}</Link></div>
                                                    <div className={styles.text}><Link onClick={() => { setMenuActive(!isMenuActive); setDropdownActive(false); setWorkflowDropdownActive(false) }} href={e.route}>{e.description}</Link></div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </li>
                            <li><Link href={'/about'} onClick={() => { setMenuActive(!isMenuActive) }}>About</Link></li>
                            <li><Link href={'/contact'} onClick={() => { setMenuActive(!isMenuActive) }}>Contact Us</Link></li>
                        </div>
                        <div className={styles.action}>
                            <Link href={'/contact'} onClick={() => { setMenuActive(!isMenuActive) }}><div className={styles.container}><button>Book a Demo</button></div></Link>

                            {isMenuActive ? <IoIosClose className={styles['menu-icon']} onClick={() => { setMenuActive(!isMenuActive) }} /> : <IoIosMenu className={styles['menu-icon']} onClick={() => { setMenuActive(!isMenuActive) }} />}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;