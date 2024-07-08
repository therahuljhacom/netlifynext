import React, { useState } from "react";
import MainSection from "@/components/homepage/MainSection/MainSection";
import StackSection from "@/components/homepage/StackDesign/StackSection";
import About from "@/components/homepage/About/About";
import Business from "@/components/homepage/Business/Business";
import AISolution from "@/components/homepage/AISolutions/AISolution";
import PlatformSection from "@/components/homepage/PlatformSection/PlatformSection";
import Expertise from "@/components/homepage/Expertise/Expertise";
import FAQ from "@/components/homepage/FAQ/FAQ";
import Technology from "@/components/homepage/Technology/Technology";
import UseCase from "@/components/homepage/UseCases/UseCase";

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
  }, {
    id: 6,
    question: "How can businesses implement Conversational AI?",
    answer: "Businesses can make use of Conversational AI solutions by integrating advanced chatbots or virtual assistants into their mobile applications, websites, customer support portals, and contact centers."
  }, {
    id: 7,
    question: "Does Conversational AI replace human customer service agents?",
    answer: "Conversational AI can be a good companion for human customer service agents but it cannot replace their role. It can handle all routine tasks and inquiries and save time for human customer service agents by allowing them to focus on more sensitive and complex issues of customers. Together, they enhance the overall capacity of customer service."
  }, {
    id: 8,
    question: "Can Conversational AI be customized for specific industries?",
    answer: "Conversational AI can benefit various fields like finance, healthcare, retail, and others. It can be tailor-made to meet specific industry needs, encompassing specialized knowledge bases and comprehending industry-specific terminologies."
  }, {
    id: 9,
    question: "How does Conversational AI improve over time?",
    answer: "Conversational AI utilizes machine learning algorithms to keep learning from what’s analyzed and interpreted from human speech and improve future interactions. Over time, each interaction with humans works to refine responses, improve accuracy, and have a better understanding of user preferences and behaviors."
  }, {
    id: 10,
    question: "What challenges does Conversational AI face?",
    answer: "Conversational AI may have some challenges like difficulty in comprehending diverse dialects and slang used by humans, maintaining privacy and security, and managing vague queries. These challenges are now being overcome with ongoing transformations in AI technology."
  }, {
    id: 11,
    question: "Why choose ThinkChat for Conversational AI Development?",
    answer: "ThinkChat creates tailored, holistic conversational AI solutions that enable businesses to have automated customer interactions, improve customer engagement, and enhance customer service efficiency. With the integration of futuristic AI, our clients get assistance for seamless and intelligent dialogue delivery with their users, encouraging their satisfaction and operational productivity. Conversational AI development can help businesses reach great heights and keep competing."
  }
]

export default function Home() {
  return (
    <>
      <main>
        <MainSection />
        <StackSection />
      </main>
      <About />
      <Technology />
      <PlatformSection />
      <AISolution />
      <UseCase />
      <div className="expertise-faq-banner">
        <Expertise />
        <FAQ faqData={data} />
      </div>
      <Business title="Empower your business with ThinkChat AI" content="Now enhance customer experience and improve retention rates with ThinkChat Conversational AI." />
    </>
  );
}
