import About from "@/components/aboutpage/About/About";
import Business from "@/components/aboutpage/Business/Business";
import CTA from "@/components/aboutpage/CTA/CTA";
import FAQ from "@/components/aboutpage/FAQ/FAQ";
import OurValues from "@/components/aboutpage/OurValues/OurValues";
import Process from "@/components/aboutpage/Process/Process";
import Topbanner from "@/components/aboutpage/Topbanner/Topbanner";
import WhatWeDo from "@/components/aboutpage/WhatWeDo/WhatWeDo";
import React from "react";
const Aboutpage = () => {
    return (
        <>
            <Topbanner />
            <About />
            <WhatWeDo />
            <Process />
            <OurValues />
            <div className="about-faq-banner">
                <CTA />
                <FAQ />
            </div>
            <Business title="Ready to Transform Your Travel Business with ThinkChat?" content="We'd love to hear from you! Whether you're interested in learning more about our solutions or have specific questions, our team is here to help. Contact us today to see how ThinkChat.io can transform your business communication." />
        </>
    )
}
export default Aboutpage;