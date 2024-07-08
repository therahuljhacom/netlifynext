'use client';
import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';
import Typebot from '../Typebot/Typebot';
import { MdChatBubbleOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const Modal = () => {
    const [modalActive, setModalActive] = useState(false);
    const [chatBtnActive, setChatBtnActive] = useState(false);
    const [isNeedActive, SetNeedActive] = useState(false);
    const [isScrolledUp, setIsScrolledUp] = useState(false);
    useEffect(() => {
        const timeoutId = setTimeout(() => setChatBtnActive(true), 6000);
        return () => clearTimeout(timeoutId); // Cleanup on unmount
    }, []);


    useEffect(() => {
        let scrolledDown = false; // Flag to track if scroll down has occurred

        const handleScroll = () => {
            let prevY = window.scrollY; // Initialize previous scroll position outside the event listener

            window.addEventListener('scroll', () => {
                const currentY = window.scrollY;

                if (!scrolledDown && currentY > prevY && currentY >= 300) {
                    setIsScrolledUp(true);
                    scrolledDown = true; // Set the flag to true once scroll down occurs
                }

                prevY = currentY; // Update previous scroll position
            });
        };

        handleScroll();

        // Cleanup function to remove the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    // Body Class Add Remove 
    useEffect(() => {
        const body = document.body;
        if (modalActive) {
            body.classList.add('modal-active'); // Add class when modal is active
        } else {
            body.classList.remove('modal-active'); // Remove class when modal is closed
        }

        // Cleanup function to remove the class on component unmount
        return () => body.classList.remove('modal-active');
    }, [modalActive]);
    // Body Class Add Remove 


    return (
        <>
            <div className={modalActive ? `${styles.modal} ${styles.active}` : `${styles.modal}`}>
                <div className={styles["modal-inner"]}>
                    <Typebot />
                </div>
            </div>
            <div className={`${styles["animated-container"]} ${isScrolledUp ? `${styles.scrollUpClass}` : ''}`}>


                {!modalActive && <ul className={isNeedActive ? `${styles.fabIcons} ${styles.active}` : `${styles.fabIcons}`}>
                    <a href="tel:+16464000081"><li className={styles["fabIcon"]}><FiPhoneCall /><span className={styles.tooltip}>Call</span></li></a>

                    {/* {chatBtnActive && <li className={styles["fabIcon"]} onClick={() => { setModalActive(true) }}><MdChatBubbleOutline /> <span className={styles.tooltip}>Chat</span> </li>} */}
                    <li className={styles["fabIcon"]} onClick={() => { setModalActive(true) }}><MdChatBubbleOutline /> <span className={styles.tooltip}>Chat</span> </li>
                    <a target='blank' href="https://api.whatsapp.com/send?text=%F0%9F%91%8B%20Hello!%20Welcome%20to%20our%20WhatsApp%20service.%20How%20can%20we%20assist%20you%20today%3F&phone=918826409891"><li className={styles["fabIcon"]}><FaWhatsapp /><span className={styles.tooltip}>Whatsapp</span></li></a>

                    <a target='blank' href="mailto:team@thinkchat.io"><li className={styles["fabIcon"]}><FaRegEnvelope /><span className={styles.tooltip}>Mail</span></li></a>
                </ul>}
                {isNeedActive ?
                    <button className={styles["fabIconCloseBtn"]} onClick={() => { SetNeedActive(!isNeedActive); setModalActive(false) }}><IoIosClose className={styles.needCloseBtn} /></button> :
                    <button className={styles["fabIconsBtn"]} onClick={() => { SetNeedActive(!isNeedActive); setModalActive(false) }}><span>Need help ?</span><div className={styles["arrow"]}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div></button>}
            </div>
        </>
    )
}
export default Modal;