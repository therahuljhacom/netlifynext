'use client';
import TopSection from "@/components/templatedetailpage/TopSection";
import React, { useState, useEffect } from "react";
import { data } from '@/constants/constant';
const dummyCard = {
    id: 1,
    chatbot_name: "",
    chatbot_description: "",
    chatbot_image: "",
    chatbot_link: ""
}
const TemplateDetail = ({ params }: { params: { templateId: string } }) => {
    const [cardDetail, setCardDetail] = useState(dummyCard);
    useEffect(() => {
        const findCardById = (data: any, cardId: string) => {
            const valueID = parseInt(cardId);
            for (const category of data) {
                for (const card of category.cards) {
                    if (card.id === valueID) {
                        setCardDetail(card);
                        return;
                    }
                }
            }
            console.log("Card with ID", cardId, "not found");
        };

        findCardById(data, params.templateId);
    }, [params.templateId]);
    return (
        <>
            <TopSection {...cardDetail} />
        </>
    )
}
export default TemplateDetail;