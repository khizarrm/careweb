"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqAccordion() {
  const faqItems = [
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. We operate on a month-to-month basis with no long-term contracts. Simply give us 30 days notice before your next billing cycle.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Our typical setup time is 2-3 weeks from the initial consultation to launching your website. The AI chatbot integration takes an additional 1-2 weeks to train on your clinic's specific information.",
    },
    {
      question: "Can you migrate my old site?",
      answer:
        "Yes, we offer content migration services from your existing website. We'll transfer all relevant content, images, and information to your new CareWeb site, ensuring a smooth transition.",
    },
    {
      question: "Is the chatbot customizable?",
      answer:
        "Our AI chatbot is fully customizable to match your clinic's branding, voice, and specific needs. We'll train it on your FAQs, services, policies, and other information to provide accurate responses to patient inquiries.",
    },
    {
      question: "Do you offer HIPAA-compliant solutions?",
      answer:
        "Yes, our Pro Package includes HIPAA-compliant hosting and data handling. We ensure that all patient information is securely stored and transmitted according to healthcare privacy regulations.",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-blue-100 overflow-hidden">
          <AccordionTrigger className="text-left font-poppins text-lg font-medium text-slate-800 hover:text-blue-600 transition-all duration-300">
            {item.question}
          </AccordionTrigger>
          <AccordionContent
            className="text-slate-600 data-[state=open]:animate-fadeIn"
            style={{ animationDuration: "0.5s" }}
          >
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
