"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronDown, HelpCircle, CheckCircle2, Clock, CreditCard, Shield, Users } from "lucide-react"

export function EnhancedFaqAccordion() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const faqItems = [
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. We operate on a month-to-month basis with no long-term contracts. Simply give us 30 days notice before your next billing cycle.",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      question: "How long does setup take?",
      answer:
        "Our typical setup time is 2-3 weeks from the initial consultation to launching your website. The AI chatbot integration takes an additional 1-2 weeks to train on your clinic's specific information.",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      question: "Can you migrate my old site?",
      answer:
        "Yes, we offer content migration services from your existing website. We'll transfer all relevant content, images, and information to your new CareWeb site, ensuring a smooth transition.",
      icon: <Users className="h-5 w-5" />,
    },
    {
      question: "Is the chatbot customizable?",
      answer:
        "Our AI chatbot is fully customizable to match your clinic's branding, voice, and specific needs. We'll train it on your FAQs, services, policies, and other information to provide accurate responses to patient inquiries.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      question: "Do you offer HIPAA-compliant solutions?",
      answer:
        "Yes, our Pro Package includes HIPAA-compliant hosting and data handling. We ensure that all patient information is securely stored and transmitted according to healthcare privacy regulations.",
      icon: <Shield className="h-5 w-5" />,
    },
  ]

  const handleItemClick = (value: string) => {
    setOpenItem(openItem === value ? null : value)
  }

  return (
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100/50 rounded-full blur-xl"></div>
      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100/50 rounded-full blur-xl"></div>

      <Accordion type="single" collapsible className="w-full" value={openItem || undefined}>
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="group border-blue-100 overflow-hidden mb-4 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-blue-50/50 transition-all duration-300"
            onClick={() => handleItemClick(`item-${index}`)}
          >
            <AccordionTrigger
            className="px-6 py-4 text-left font-poppins text-lg font-medium text-slate-800 hover:text-blue-600 transition-all duration-300 flex items-center focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0"
          >
              <div className="flex items-center gap-3 w-full">
                <div
                  className={`rounded-full p-2 ${openItem === `item-${index}` ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"} transition-colors duration-300`}
                >
                  {item.icon || <HelpCircle className="h-5 w-5" />}
                </div>
                <span>{item.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent
              className="px-6 pb-4 pl-16 text-slate-600 data-[state=open]:animate-fadeIn"
              style={{ animationDuration: "0.5s" }}
            >
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-100 rounded-full"></div>
                <p className="pl-4">{item.answer}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-6 text-center">
        <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
          <CreditCard className="h-4 w-4" />
          <span>
            Have more questions?{" "}
            <a href="#contact" className="text-blue-600 hover:underline">
              Contact us
            </a>
          </span>
        </p>
      </div>
    </div>
  )
}
