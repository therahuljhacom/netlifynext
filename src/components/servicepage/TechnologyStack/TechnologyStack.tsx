import React from "react";
import styles from './TechnologyStack.module.css';
import Image from "next/image";
const TechnologyStack = () => {
    return (
        <>
            <section className={styles.techonology}>
                <div className="wrapper">
                    <div className={`main-heading ${styles.heading}`}>Our technology stack for chatbot development</div>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div className={`main-heading ${styles.cardHeading}`}>Programming Languages</div>
                            <ul className={styles.boxes}>
                                <li><Image width={60} height={60} src={'/assets/angular.png'} alt="Image" /> Angular</li>
                                <li><Image width={60} height={60} src={'/assets/ruby.png'} alt="Image" /> Ruby</li>
                                <li><Image width={60} height={60} src={'/assets/clojure.png'} alt="Image" /> Clojure</li>
                                <li><Image width={60} height={60} src={'/assets/python.png'} alt="Image" /> Python</li>
                                <li><Image width={60} height={60} src={'/assets/lisp.png'} alt="Image" /> Lisp</li>
                                <li><Image width={60} height={60} src={'/assets/java.png'} alt="Image" /> Java</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <div className={`main-heading ${styles.cardHeading}`}>Cloud Services</div>
                            <ul className={styles.boxes}>
                                <li><Image width={60} height={60} src={'/assets/amazonlex.png'} alt="Image" /> Amazon Lex</li>
                                <li><Image width={60} height={60} src={'/assets/gcd.png'} alt="Image" /> Google Cloud Dialogflow</li>
                                <li><Image width={60} height={60} src={'/assets/ibm.png'} alt="Image" /> IBM Watson Assistant</li>
                                <li><Image width={60} height={60} src={'/assets/abs.png'} alt="Image" /> Azure Bot Services</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <div className={`main-heading ${styles.cardHeading}`}>Frameworks and Libraries</div>
                            <ul className={styles.boxes}>
                                <li><Image width={60} height={60} src={'/assets/nltk.png'} alt="Image" /> NLTK (Natural Language Toolkit)spaCy</li>
                                <li><Image width={60} height={60} src={'/assets/tensorflow.png'} alt="Image" /> TensorFlow</li>
                                <li><Image width={60} height={60} src={'/assets/msbot.png'} alt="Image" /> Microsoft Bot Framework</li>
                                <li><Image width={60} height={60} src={'/assets/rasa.png'} alt="Image" /> Rasa</li>
                                <li><Image width={60} height={60} src={'/assets/pytorch.png'} alt="Image" /> PyTorch, DialogFlow</li>
                                <li><Image width={60} height={60} src={'/assets/botpress.png'} alt="Image" /> BotPress</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <div className={`main-heading ${styles.cardHeading}`}>AI Tools</div>
                            <ul className={styles.boxes}>
                                <li><Image width={60} height={60} src={'/assets/nlp.png'} alt="Image" /> NLP</li>
                                <li><Image width={60} height={60} src={'/assets/speech.png'} alt="Image" /> Speech recognition</li>
                                <li><Image width={60} height={60} src={'/assets/ml.png'} alt="Image" /> ML</li>
                                <li><Image width={60} height={60} src={'/assets/ocr.png'} alt="Image" /> OCR</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default TechnologyStack;