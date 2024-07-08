'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from './HowItWorks.module.css';
interface cardItem {
    id: number,
    title: string,
    description: string,
    icon: string
}
interface IPROPS {
    title: string,
    cards: cardItem[]
}
const HowItWorks = ({ title, cards }: IPROPS) => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
                        </Slider>
                    </div>
                </div>

            </section>
        </>
    )
}
export default HowItWorks;