import React from "react";
import styles from './StackSection.module.css';
import Image from 'next/image';
import Link from "next/link";
const stackData = [
    {
        id: 1,
        icon: "/assets/icon-1.webp",
        image: "/assets/homepage-stackvideo/chatbotDevelopment.mp4",
        title: "Chatbot Development",
        route: "/services/chatbot-development",
        description: "Integrating our advanced chatbot development services can significantly increase your website's engagement. Our chatbots are designed to provide immediate, 24/7 assistance, relieving you of the burden of constant customer service. This comfort keeps your visitors engaged and satisfied, which can lead to increased traffic and a higher conversion rate."
    }, {
        id: 2,
        icon: "/assets/iconStack2.png",
        image: "/assets/homepage-stackvideo/omnichannelPlatform.mp4",
        title: "Omnichannel Platform",
        route: "/services/omnichannel-dashboard",
        description: "Give conversions a boost with Thinkchat! This AI-powered omnichannel platform goes beyond traditional chatbots. Seamlessly integrate with WhatsApp and Facebook Messenger to reach your audience where they are most active. Customise workflows to meet your unique business needs, ensuring personalised and efficient customer experiences. Transform the way you connect with your customers!"
    }, {
        id: 3,
        icon: "/assets/icon-2.webp",
        image: "/assets/homepage-stackvideo/virtualvoiceconventionalai.mp4",
        title: "Virtual / Voice Assistant & Multilingual Conversational AI",
        route: "/services/virtual-voice-assistant-and-multilingual-conversational-ai",
        description: "ThinkChat.io specialises in creating advanced virtual and multilingual conversational AI that is customised to meet your specific business needs. Leveraging the latest AI technologies, our solutions provide intuitive, natural interactions, enhancing customer satisfaction and streamlining your business operations."
    }, {
        id: 4,
        icon: "/assets/livchatIcon.png",
        image: "/assets/homepage-stackvideo/liveAgent.mp4",
        title: "Live Agent",
        route: "/services/live-agent",
        description: "Thinkchat&apos;s live agent feature makes your team&apos;s job easier! Get real-time support for your customers and boost conversions. Seamlessly integrate human touch into automated workflows, ensuring exceptional customer experiences that foster trust and loyalty."
    }, {
        id: 5,
        icon: "/assets/icon-5.webp",
        image: "/assets/homepage-stackvideo/whatsappIntegration.mp4",
        title: "WhatsApp Business Automation",
        route: "/services/whatsapp-integration",
        description: "Leverage our business automation services to streamline operations and improve customer interactions on your website. Automated processes reduce response times and improve efficiency, leading to higher customer satisfaction, increased traffic, and a better understanding of customer behaviours and requirements."
    }
]
const StackSection = () => {
    return (
        <>
            <section className={styles["stack-section"]}>
                <div className="wrapper">
                    <div className={styles["stack-content"]}>
                        <div className={`main-heading`}>Experience Automation with ThinkChat AI Services</div>
                        <div className={`sub-heading ${styles.stackSubHeading}`}>We build intelligent systems to suit your individual business requirements. We integrate prompts seamlessly into your application or website, providing users with intuitive controls and feedback mechanisms.</div>
                    </div>
                    <ul id={styles.cards}>
                        {stackData.map((card) => {
                            return <li key={card.id} className={styles.card} id={styles[`card${card.id}`]}>
                                <div className={styles["card-body"]} id="card3body">
                                    <div className={styles.left}>
                                        <div className={styles.icon}>
                                            <Image width={30} height={30} src={card.icon} alt="" />
                                        </div>
                                        <div className={styles["card-title"]}>{card.title}</div>
                                        <div className={`sub-heading ${styles.stackSubHeading}`} dangerouslySetInnerHTML={{ __html: card.description }}></div>
                                        <div className={styles["card-link"]}><Link href={card.route}>View More Details</Link></div>
                                    </div>
                                    <div className={styles.right}>
                                        {/* <Image width={690} height={544} src={card.image} unoptimized alt="Image" /> */}
                                        <video className={styles.video} loop autoPlay muted playsInline>
                                            <source src={card.image} type='video/mp4' />
                                        </video>
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}
export default StackSection;