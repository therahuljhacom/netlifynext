'use client';
import React, { useState, useEffect } from "react";
import Business from "@/components/servicepage/Business/Business";
import Keyfactor from "@/components/servicepage/Keyfactor/Keyfactor";
import Process from "@/components/servicepage/Process/Process";
import ServiceAbout from "@/components/servicepage/ServiceAbout/ServiceAbout";
import Topbanner from "@/components/servicepage/Topbanner/Topbanner";
import CardGrid from "@/components/servicepage/CardGrid/CardGrid";
import Whychoose from "@/components/servicepage/Whychoose/Whychoose";
import FAQ from "@/components/servicepage/FAQ/FAQ";
import TechnologyStack from '@/components/servicepage/TechnologyStack/TechnologyStack';
import { services } from '@/constants/constant.js';
const dummyServiceData = {
    topBanner: {
        title: "",
        description: ""
    },
    serviceAbout: {
        title: "",
        description: ""
    },
    process: {
        title: "",
        description: "",
        cards: [
            {
                id: 1,
                title: "",
                icon:"",
                description: ""
            }
        ]
    },
    keyfactor: {
        shortTitle: "",
        title: "",
        description: "",
        cards: [
            {
                id: 1,
                title: "",
                icon:""
            }
        ]
    },
    cardGrid: {
        title: "",
        description: "",
        cards: [
            {
                id: 1,
                title: "",
                icon:"",
                description: ""
            },
            {
                id: 2,
                title: "",
                icon:"",
                description: ""
            },
            {
                id: 3,
                title: "",
                icon:"",
                description: ""
            },
            {
                id: 4,
                title: "",
                icon:"",
                description: ""
            }
        ]
    },
    industries: {},
    whyChoose: {
        title: "",
        description: "",
        cards: [
            {
                id: 1,
                number: "",
                title: ""
            }
        ]
    },
    testimonials: {},
    technologyStack: {},
    faq: [
        {
            id: 1,
            question: "",
            answer: ""
        }
    ],
    business: {
        title: "",
        description: ""
    }
}

const Services = ({ params }: { params: { serviceId: string } }) => {
    const [servicesData, setServicesData] = useState(dummyServiceData);
    useEffect(() => {
        if (params.serviceId == "services") {
            setServicesData(services.chatbotDevelopment);
        } else if (params.serviceId == "omnichannel-dashboard") {
            setServicesData(services.omnichannelDashboard);
        } else if (params.serviceId == "live-agent") {
            setServicesData(services.liveAgent);
        } else if (params.serviceId == "chatbot-development") {
            setServicesData(services.chatbotDevelopment);
        } else if (params.serviceId == "whatsapp-integration") {
            setServicesData(services.whatsappIntegration);
        } else if (params.serviceId == "virtual-voice-assistant-and-multilingual-conversational-ai") {
            setServicesData(services.virtualVoiceAssistantMultilingual);
        }
    }, [params.serviceId]);
    return (
        <>
            <Topbanner {...servicesData.topBanner} />
            <ServiceAbout {...servicesData.serviceAbout} />
            <Process {...servicesData.process} />
            <Keyfactor {...servicesData.keyfactor} />
            <CardGrid {...servicesData.cardGrid} />
            <Whychoose {...servicesData.whyChoose} />
            <div className="service-technology">
                <TechnologyStack />
                <FAQ faq={servicesData.faq} />
            </div>
            <Business {...servicesData.business} />
        </>
    )
}

export default Services;