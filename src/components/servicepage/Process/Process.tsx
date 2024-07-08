'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from './Process.module.css';
interface propsCards {
    id: number,
    title: string,
    icon:string,
    description: string,
}
interface IProcessProps {
    title: string,
    description: string,
    cards: propsCards[]
}
const Process: React.FC<IProcessProps> = ({ title, description, cards }) => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4.1,
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
                        <div className={`main-heading ${styles.heading}`}>{title}</div>
                        <div className={`sub-heading ${styles.subHeading}`}>{description}</div>
                    </div>
                    <div className={styles.processCards}>
                        <Slider {...settings}>
                            {cards.map((e) => {
                                return (
                                    <>
                                        <div key={e.id} id={styles[`processcard${e.id}`]} className={styles.processCard}>
                                            <div className={styles.icon}>
                                                <Image width={60} height={60} src={e.icon} alt="Icon" />
                                            </div>
                                            <div className={styles.cardContent}>
                                                <div className={`main-heading ${styles.cardTitle}`}>{e.title}</div>
                                                <div className={`sub-heading ${styles.cardPara}`}>{e.description}</div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                            {/* <div id={styles.processcard2} className={styles.processCard}>
                                <div className={styles.icon}>
                                    <Image width={60} height={60} src={'/assets/chatbot-develpment.png'} alt="Icon" />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={`main-heading ${styles.cardTitle}`}>Strategy and Planning</div>
                                    <div className={`sub-heading ${styles.cardPara}`}>Our team develops a comprehensive strategy that outlines how live agent support will be integrated with your current systems and AI solutions, ensuring a cohesive customer experience.</div>
                                </div>
                            </div>
                            <div id={styles.processcard3} className={styles.processCard}>
                                <div className={styles.icon}>
                                    <Image width={60} height={60} src={'/assets/chatbot-integration.png'} alt="Icon" />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={`main-heading ${styles.cardTitle}`}>Training and Onboarding</div>
                                    <div className={`sub-heading ${styles.cardPara}`}>We provide extensive training for our live agents to ensure they are well-versed in your business processes, products, and customer service protocols.</div>
                                </div>
                            </div>
                            <div id={styles.processcard4} className={styles.processCard}>
                                <div className={styles.icon}>
                                    <Image width={60} height={60} src={'/assets/testing-and-development.png'} alt="Icon" />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={`main-heading ${styles.cardTitle}`}>Integration</div>
                                    <div className={`sub-heading ${styles.cardPara}`}>Our team seamlessly integrates live agent support with your existing AI chatbot and customer service systems, ensuring smooth operation across all platforms.</div>
                                </div>
                            </div>
                            <div id={styles.processcard5} className={styles.processCard}>
                                <div className={styles.icon}>
                                    <Image width={60} height={60} src={'/assets/testing-and-development.png'} alt="Icon" />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={`main-heading ${styles.cardTitle}`}>Testing and Deployment</div>
                                    <div className={`sub-heading ${styles.cardPara}`}>We conduct thorough testing to ensure reliability and efficiency before going live. Continuous monitoring and optimization are provided to maintain top performance.</div>
                                </div>
                            </div> */}
                        </Slider>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Process;