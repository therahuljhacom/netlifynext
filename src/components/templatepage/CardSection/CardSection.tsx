'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from './CardSection.module.css';
import Link from "next/link";
interface gridCards {
    id: number,
    chatbot_name: string,
    chatbot_image: string,
    chatbot_description: string,
}
interface IGridProps {
    id: number,
    name: string,
    cards: gridCards[]
}
const CardSection: React.FC<IGridProps> = ({ id, name, cards }) => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className={styles.cardSection}>
                <div className="wrapper">
                    <div className={styles.headingBox}>
                        <div className={`main-heading ${styles.heading}`}>{name}</div>
                        <div className={styles.icons}></div>
                    </div>
                    <div className={styles.boxes}>
                        <Slider {...settings}>
                            {
                                cards.map((e) => {
                                    return (
                                        <Link key={e.id} href={`/template/${e.id}`}>
                                            <div className={styles.box}>
                                                <Image src={e.chatbot_image} width={400} height={207} alt="Image" />
                                                <div className={styles.boxContent}>
                                                    <div className={styles.boxTitle}>{e.chatbot_name}</div>
                                                    <div className={styles.boxPara}>{`${e.chatbot_description.substring(0, 70)}...`}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CardSection;