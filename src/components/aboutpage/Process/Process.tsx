'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from './Process.module.css';
const Process = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 2,
        initialSlide: 0,
        afterChange: function (index: number) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className={`processSection ${styles.process}`}>
                <div className="wrapper">
                    <div className={styles.content}>
                        <div className={`main-heading ${styles.heading}`}>Our Process</div>
                        <div className={`sub-heading ${styles.subHeading}`}>We follow a structured approach to ensure our solutions meet the highest standards
                            of quality and performance:</div>
                    </div>
                    <div className={styles.processCards}>
                        <Slider {...settings}>
                            <div id={styles[`processcard1`]} className={styles.processCard}>
                                <div className={styles.icon}>
                                    <Image width={50} height={50} src={'/assets/aboutp1.png'} alt="Icon" />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={`main-heading ${styles.cardTitle}`}>Discovery Phase</div>
                                    <div className={`sub-heading ${styles.cardPara}`}>We start by understanding your business needs, objectives, and customer service requirements through comprehensive consultations.</div>
                                </div>
                            </div>

                            <div id={styles.processcard2} className={styles.processCard}>
                                <div className={styles.icon}>
                                    <Image width={50} height={50} src={'/assets/aboutp2.png'} alt="Icon" />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={`main-heading ${styles.cardTitle}`}>Strategy and Planning</div>
                                    <div className={`sub-heading ${styles.cardPara}`}>Our team develops a customized strategy to integrate our solutions with your existing systems and workflows.</div>
                                </div>
                            </div>
                            <div id={styles.processcard3} className={styles.processCard}>
                                <div className={styles.icon}>
                                    <Image width={50} height={50} src={'/assets/aboutp3.png'} alt="Icon" />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={`main-heading ${styles.cardTitle}`}>Customization and Integration</div>
                                    <div className={`sub-heading ${styles.cardPara}`}>We tailor our solutions to meet your specific requirements and ensure seamless integration.</div>
                                </div>
                            </div>
                            <div id={styles.processcard4} className={styles.processCard}>
                                <div className={styles.icon}>
                                    <Image width={50} height={50} src={'/assets/aboutp4.png'} alt="Icon" />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={`main-heading ${styles.cardTitle}`}>Training and Onboarding</div>
                                    <div className={`sub-heading ${styles.cardPara}`}>We provide thorough training to your team to ensure they can effectively use our solutions.</div>
                                </div>
                            </div>
                            <div id={styles.processcard5} className={styles.processCard}>
                                <div className={styles.icon}>
                                    <Image width={50} height={50} src={'/assets/aboutp5.png'} alt="Icon" />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={`main-heading ${styles.cardTitle}`}>Testing and Deployment</div>
                                    <div className={`sub-heading ${styles.cardPara}`}>Extensive testing is conducted to ensure reliability and efficiency before going live.</div>
                                </div>
                            </div>
                            <div id={styles.processcard5} className={styles.processCard}>
                                <div className={styles.icon}>
                                    <Image width={50} height={50} src={'/assets/aboutp5.png'} alt="Icon" />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={`main-heading ${styles.cardTitle}`}>Continuous Support and Optimization</div>
                                    <div className={`sub-heading ${styles.cardPara}`}>We offer ongoing maintenance and optimization to ensure top performance and address any evolving needs.</div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Process;