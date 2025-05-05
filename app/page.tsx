import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { ChatbotDemo } from "@/components/chatbot-demo"
import { FaqAccordion } from "@/components/faq-accordion"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PackageCard } from "@/components/package-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { ValueCard } from "@/components/value-card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-400 py-20 md:py-32"
      >
        <div className="absolute inset-0 opacity-10">
          <Image src="/placeholder.svg?height=800&width=1600" alt="Background Pattern" fill className="object-cover" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-poppins text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Modern Websites & AI for Medical & Dental Clinics
            </h1>
            <p className="mb-8 text-xl text-white/90">Launch fast. Look professional. Automate patient engagement.</p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="#packages">View Packages</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-blue hover:bg-white/10">
                <Link href="#demo">See Demo</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce text-white">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Value Props Section */}
      <section id="why" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-poppins text-3xl font-bold text-slate-800 md:text-4xl">
            Why Choose CareWeb
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <ValueCard
              icon="Layout"
              title="Custom site built for your clinic"
              description="Professionally designed websites tailored specifically for medical and dental practices."
            />
            <ValueCard
              icon="MessageSquareText"
              title="24/7 AI chatbot to answer patient questions"
              description="Automated patient engagement that works around the clock to answer common questions."
            />
            <ValueCard
              icon="HeadsetHelp"
              title="Ongoing monthly support & hosting"
              description="Continuous technical support and secure hosting for your website and chatbot."
            />
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-poppins text-3xl font-bold text-slate-800 md:text-4xl">Our Packages</h2>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <PackageCard
              title="Starter Package"
              setupPrice={300}
              monthlyPrice={150}
              features={["Responsive website", "Mobile-ready", "SEO + contact form", "Monthly maintenance"]}
              recommended={false}
            />
            <PackageCard
              title="Pro Package"
              setupPrice={350}
              monthlyPrice={175}
              features={[
                "Everything in Starter",
                "AI chatbot integration",
                "Monthly bot improvements",
                "Always-on support",
              ]}
              recommended={true}
            />
          </div>
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-white p-6 shadow-md">
            <h3 className="mb-4 font-poppins text-xl font-semibold text-slate-800">Available Add-ons</h3>
            <ul className="grid grid-cols-1 gap-2 md:grid-cols-3">
              <li className="flex items-center gap-2 text-slate-700">
                <div className="rounded-full bg-blue-100 p-1 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                Booking system
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <div className="rounded-full bg-blue-100 p-1 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                Reviews integration
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <div className="rounded-full bg-blue-100 p-1 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                Lead tracking dashboard
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center font-poppins text-3xl font-bold text-slate-800 md:text-4xl">
            Try Our AI Chatbot
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-600">
            Test how the AI bot engages with patients. Ask questions about appointments, services, or general medical
            inquiries.
          </p>
          <ChatbotDemo />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-poppins text-3xl font-bold text-slate-800 md:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <TestimonialCard
              initials="DR"
              name="Dr. Rebecca M."
              role="Dental Clinic Owner"
              quote="CareWeb gave my clinic a modern edge — patients love the chatbot. It's been a game-changer for our practice."
            />
            <TestimonialCard
              initials="JT"
              name="Dr. James T."
              role="Medical Director"
              quote="We saw new appointments within the first week. The website is beautiful and the AI chatbot handles basic questions perfectly."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-poppins text-3xl font-bold text-slate-800 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-gradient-to-br from-blue-600 to-blue-400 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-poppins text-3xl font-bold text-white md:text-4xl">
            Ready to modernize your clinic?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">We'll handle the tech — you focus on care.</p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <a href="mailto:contact@careweb.com">Email Us</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
