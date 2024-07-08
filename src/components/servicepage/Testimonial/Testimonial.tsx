import React from "react";
import styles from './Testimonial.module.css';
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";
const testimonial = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet consectetur adipes.',
        content: 'Lorem ipsum dolor sit amet consectetur adipis ecing elit suspendisse at mauris ut ipsum laoreet ferme tum duisea tellus interdum consectetur ligula sed fringilla leo aliquam dictum, purus bibendum veste bulum vestibulum augue ipsum molestie risus velas volutpat nulla iaculis fermentum.',
        name: 'JOHN SMITH',
        image: '/assets/testimonial1.png'
    }, {
        id: 2,
        title: 'Lorem ipsum dolor sit amet consectetur adipes.',
        content: 'Lorem ipsum dolor sit amet consectetur adipis ecing elit suspendisse at mauris ut ipsum laoreet ferme tum duisea tellus interdum consectetur ligula sed fringilla leo aliquam dictum, purus bibendum veste bulum vestibulum augue ipsum molestie risus velas volutpat nulla iaculis fermentum.',
        name: 'JOHN SMITH',
        image: '/assets/testimonial1.png'
    }, {
        id: 3,
        title: 'Lorem ipsum dolor sit amet consectetur adipes.',
        content: 'Lorem ipsum dolor sit amet consectetur adipis ecing elit suspendisse at mauris ut ipsum laoreet ferme tum duisea tellus interdum consectetur ligula sed fringilla leo aliquam dictum, purus bibendum veste bulum vestibulum augue ipsum molestie risus velas volutpat nulla iaculis fermentum.',
        name: 'JOHN SMITH',
        image: '/assets/testimonial1.png'
    }, {
        id: 4,
        title: 'Lorem ipsum dolor sit amet consectetur adipes.',
        content: 'Lorem ipsum dolor sit amet consectetur adipis ecing elit suspendisse at mauris ut ipsum laoreet ferme tum duisea tellus interdum consectetur ligula sed fringilla leo aliquam dictum, purus bibendum veste bulum vestibulum augue ipsum molestie risus velas volutpat nulla iaculis fermentum.',
        name: 'JOHN SMITH',
        image: '/assets/testimonial1.png'
    }
]
const Testimonial = () => {
    return (
        <>
            <section className={styles.testimonial}>
                <div className="wrapper">
                    <div className={styles.content}>
                        <div className={styles.left}>
                            <div className={`main-heading ${styles.heading}`}>Client Testimonials</div>
                        </div>
                        <div className={styles.right}>
                            <div className={`main-heading ${styles.contentHeading}`}>Lorem ipsum dolor sit amet
                                consectetur adipes.</div>
                            <ul className={styles.stars}>
                                <li><RiStarSFill /></li>
                                <li><RiStarSFill /></li>
                                <li><RiStarSFill /></li>
                                <li><RiStarSFill /></li>
                                <li><RiStarSFill /></li>
                            </ul>
                            <div className={`sub-heading ${styles.contentSubHeading}`}>Lorem ipsum dolor sit amet consectetur adipis ecing elit suspendisse at mauris ut ipsum laoreet ferme tum duisea tellus interdum consectetur ligula sed fringilla leo aliquam dictum, purus bibendum veste bulum vestibulum augue ipsum molestie risus velas volutpat nulla iaculis fermentum.</div>
                            <div className={styles.name}>John Smith</div>
                            <div className={styles.testiImage}>
                                <Image src={'/assets/testimonial1.png'} width={500} height={350} alt="testimonialImage" />
                                <span className={styles.quote}>“</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.arrow}>
                            <Image src={'/assets/lefArrow.png'} width={40} height={40} alt="arrow" />
                            <Image src={'/assets/rightarrow.png'} width={50} height={50} alt="arrow" />
                        </div>
                </div>
            </section>
        </>
    )
}
export default Testimonial;