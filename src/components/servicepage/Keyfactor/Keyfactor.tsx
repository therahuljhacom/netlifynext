'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Keyfactor.module.css';
import Image from "next/image";
interface keyCards {
    id: number,
    title: string,
    icon: string
}
interface IKeyProps {
    shortTitle: string,
    title: string,
    description: string,
    cards: keyCards[]
}
const Keyfactor: React.FC<IKeyProps> = ({ shortTitle, title, description, cards }) => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
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
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className={styles.keyfactor}>
                <div className="wrapper">
                    <div className={styles.content}>
                        <div className={styles.keyfactorTitle}>{shortTitle}</div>
                        <div className={`main-heading ${styles.heading}`}>{title}</div>
                        <div className={`sub-heading ${styles.subHeading}`}>{description}</div>
                    </div>
                    <div className={styles.keyfactorSlider}>
                        <Slider {...settings}>
                            {cards.map((e) => {
                                return (
                                    <div key={e.id} className={styles.box}>
                                        <div className={styles.icon}>
                                            <Image width={90} height={90} src={e.icon} alt='Image' />
                                        </div>
                                        <div className={`sub-heading ${styles.boxTitle}`}>{e.title}</div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Keyfactor;