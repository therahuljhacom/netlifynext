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
import { services } from "@/constants/constant";
const Services = () => {
    const [servicesData, setServicesData] = useState(services.chatbotDevelopment);
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