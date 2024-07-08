import React from "react";
import CardSection from "@/components/templatepage/CardSection/CardSection";
import { data } from '@/constants/constant';
const Template = () => {
    return (
        <>
            <div className="template">
                {data.map((cardSection) => {
                    return <CardSection key={cardSection.id} {...cardSection} />
                })}
            </div>
        </>
    )
}
export default Template;