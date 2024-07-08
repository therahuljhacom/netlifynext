import React from "react";
import styles from './Footer.module.css';
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import Link from "next/link";
import Image from 'next/image';
const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className="wrapper">
                    <div className={styles["footer-grid"]}>
                        <div className={styles["footer-about"]}>
                            <div className={styles["footer-logo"]}><Link href={'/'}><Image width={120} height={115} src="/assets/footer-logo.webp" alt="footer-logo" /></Link></div>
                            <div className={`sub-heading ${styles['footer-sub-heading']}`}>At ThinkChat, we transform the business process with our AI solutions. Our mission is to empower your platform with advanced technologies that streamline operations, enhance customer engagement, and drive growth.</div>
                            <p className={styles.Cta}><MdOutlineLocationOn className={styles.ctcIcon} /> 8 The Green #14951 Dover , Delaware , 19901</p>
                            <p className={styles.Cta}><span><FiPhoneCall className={styles.ctcIcon} /> <a href="tel:+16464000081">(646) 400-0081</a></span> | <span>
                                <FaRegEnvelope className={styles.ctcIcon} /> <a target='blank' href="mailto:team@thinkchat.io">team@thinkchat.io</a></span></p>
                            <div className={styles["footer-icons"]}>
                                <div className={styles["footer-icon"]}><Link target="_blank" href="https://www.facebook.com/profile.php?id=61559854566532"><FaFacebookF className='icon' /></Link></div>
                                <div className={styles["footer-icon"]}><a><RiTwitterXLine className='icon' /></a></div>
                                <div className={styles["footer-icon"]}><a><FaLinkedinIn className='icon' /></a></div>
                                <div className={styles["footer-icon"]}><Link target="_blank" href="https://www.instagram.com/thinkchat.io"><FaInstagram className='icon' /></Link></div>
                            </div>
                        </div>
                        <div className={styles["footer-features"]}>
                            <div className={`main-heading ${styles['footer-heading']}`}>Services</div>
                            <ul>
                                <li><Link href={'/services/chatbot-development'}>Chatbot Development</Link></li>
                                <li><Link href={'/services/omnichannel-dashboard'}>Omnichannel Platform</Link></li>
                                <li><Link href={'/services/virtual-voice-assistant-and-multilingual-conversational-ai'}>Virtual / Voice Assistant & Multilingual Conversational AI</Link></li>
                                <li><Link href={'/services/live-agent'}>Live Agent</Link></li>
                                <li><Link href={'/services/whatsapp-integration'}>WhatsApp Business Automation</Link></li>
                            </ul>
                        </div>
                        <div className={styles["footer-links"]}>
                            <div className={`main-heading ${styles['footer-heading']}`}>Quick Links</div>
                            <ul>
                                <li><Link href={'/about'}>About</Link></li>
                                <li><Link href={'/contact'}>Contact</Link></li>
                                <li><Link href={'/terms-of-service'}>Terms of Service</Link></li>
                                <li><Link href={'/privacy-policy'}>Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles["footer-bottom"]}>
                    <div className="wrapper">
                        <div className={`sub-heading ${styles['footer-sub-heading']}`}>© Copyright 2024 Nectar Innovations LLC, All Right Reserevd.</div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;