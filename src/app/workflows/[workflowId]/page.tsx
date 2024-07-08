'use client';
import React, { useEffect, useState } from "react";
import TopBanner from "@/components/workflowpage/TopBanner/TopBanner";
import WhyThinkchat from "@/components/workflowpage/WhyThinkchat/WhyThinkchat";
import HowItWorks from "@/components/workflowpage/HowItWorks/HowItWorks";
import UseCase from "@/components/workflowpage/UseCase/UseCase";
import KeyFeatures from "@/components/workflowpage/KeyFeatures/KeyFeatures";
import Business from '@/components/workflowpage/Business/Business';
import FAQ from '@/components/workflowpage/FAQ/FAQ';
import { workflows } from "@/constants/constant";
import ChatbotAnimation from "@/components/servicepage/Chatbot/ChatbotAnimation";
const data = [
    {
        id: 1,
        question: "What is Conversational AI?",
        answer: "Conversational AI is a type of artificial intelligence, breakthrough technology like advanced chatbots and virtual assistants, that can allow computers to mimic natural human conversations by understanding, processing, and responding to natural human language."
    }, {
        id: 2,
        question: "How does Conversational AI work?",
        answer: "Conversational AI clubs together natural language processing (NLP), machine learning, and big data analytics to analyze and interpret the user’s speech to understand its meaning and learn new information that would help improve future interactions of machines with humans"
    }, {
        id: 3,
        question: "What are the benefits of using Conversational AI?",
        answer: "It offers a lot of advantages. These include reduced operational costs, increased productivity, faster handling times for large volumes of simultaneous interactions, improved customer engagement, and round-the-clock customer support which improves the overall efficiency of customer services. As a whole, conversational AI can help transform all facets of businesses and let them stay competitive."
    }, {
        id: 4,
        question: "Can Conversational AI understand multiple languages?",
        answer: "Yes. A conversational AI system is usually designed to support multiple human dialects. This way, businesses can be extended to serve customers from any region of the world by having conversations with them in their native languages."
    }, {
        id: 5,
        question: "Is Conversational AI secure?",
        answer: "Conversational AI can be extremely secure when implemented with best cybersecurity practices. For the protection of any user data, secure APIs, data encryption, and compliance with privacy regulations such as GDPR are usually available."
    }
    // , {
    //     id: 6,
    //     question: "How can businesses implement Conversational AI?",
    //     answer: "Businesses can make use of Conversational AI solutions by integrating advanced chatbots or virtual assistants into their mobile applications, websites, customer support portals, and contact centers."
    // }, {
    //     id: 7,
    //     question: "Does Conversational AI replace human customer service agents?",
    //     answer: "Conversational AI can be a good companion for human customer service agents but it cannot replace their role. It can handle all routine tasks and inquiries and save time for human customer service agents by allowing them to focus on more sensitive and complex issues of customers. Together, they enhance the overall capacity of customer service."
    // }, {
    //     id: 8,
    //     question: "Can Conversational AI be customized for specific industries?",
    //     answer: "Conversational AI can benefit various fields like finance, healthcare, retail, and others. It can be tailor-made to meet specific industry needs, encompassing specialized knowledge bases and comprehending industry-specific terminologies."
    // }, {
    //     id: 9,
    //     question: "How does Conversational AI improve over time?",
    //     answer: "Conversational AI utilizes machine learning algorithms to keep learning from what’s analyzed and interpreted from human speech and improve future interactions. Over time, each interaction with humans works to refine responses, improve accuracy, and have a better understanding of user preferences and behaviors."
    // }, {
    //     id: 10,
    //     question: "What challenges does Conversational AI face?",
    //     answer: "Conversational AI may have some challenges like difficulty in comprehending diverse dialects and slang used by humans, maintaining privacy and security, and managing vague queries. These challenges are now being overcome with ongoing transformations in AI technology."
    // }, {
    //     id: 11,
    //     question: "Why choose ThinkChat for Conversational AI Development?",
    //     answer: "ThinkChat creates tailored, holistic conversational AI solutions that enable businesses to have automated customer interactions, improve customer engagement, and enhance customer service efficiency. With the integration of futuristic AI, our clients get assistance for seamless and intelligent dialogue delivery with their users, encouraging their satisfaction and operational productivity. Conversational AI development can help businesses reach great heights and keep competing."
    // }
]
const dummyWorkflowData = {
    topBanner: {
        title: "",
        description: "",
        buttonURL: "",
        patternPath: "",
        imagePath: ""
    },
    whyThinkchat: {
        title: "",
        description: "",
        imagePath: "",
        accordions: [
            {
                id: 1,
                title: "",
                description: "",
                icon: ''
            }
        ]
    },
    howItWorks: {
        title: "",
        cards: [
            {
                id: 1,
                title: "",
                description: "",
                icon: ""
            }
        ]
    },
    useCase: {
        title: "",
        imagePath: "",
        cards: [
            {
                id: 1,
                title: "",
                description: "",
                icon: ""
            }
        ]

    },
    keyFeatures: {
        title: "",
        cards: [
            {
                id: 1,
                title: "",
                description: "",
                icon: ""
            }
        ]
    },
    faq: {
        title: "",
        faqList: [
            {
                id: 1,
                question: "",
                answer: ""
            }
        ]
    },
    business: {
        title: "",
        description: ""
    }
}
const Workflows = ({ params }: { params: { workflowId: string } }) => {
    const [workflowData, setWorkflowData] = useState(dummyWorkflowData);
    useEffect(() => {
        if (params.workflowId == "travel") {
            setWorkflowData(workflows.travel);
        } else if (params.workflowId == "non-profits") {
            setWorkflowData(workflows.nonProfits);
        } else if (params.workflowId == "real-estate") {
            setWorkflowData(workflows.realEstate);
        } else if (params.workflowId == "healthcare") {
            setWorkflowData(workflows.healthcare);
        }
    }, [params.workflowId]);
    return (
        <>
            <TopBanner {...workflowData.topBanner} />
            <WhyThinkchat {...workflowData.whyThinkchat} />
            <HowItWorks {...workflowData.howItWorks} />
            <UseCase {...workflowData.useCase} />
            <KeyFeatures {...workflowData.keyFeatures} />
            <div className="workflow-faq-banner">
                <FAQ {...workflowData.faq} />
            </div>
            <Business {...workflowData.business} />
        </>
    )
}
export default Workflows;