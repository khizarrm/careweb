import { ChevronDown } from "lucide-react"
import Link from "next/link"

import { ChatbotDemo } from "@/components/chatbot-demo"
import { EnhancedAddOnCard } from "@/components/enhanced-add-on-card"
import { EnhancedFaqAccordion } from "@/components/enhanced-faq-accordion"
import { Footer } from "@/components/footer"
import { HeroBackground } from "@/components/hero-background"
import { InteractiveCTA } from "@/components/interactive-cta"
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
        className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 py-20 md:py-32"
      >
        <HeroBackground />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-block rounded-full bg-white/10 px-4 py-1 backdrop-blur-sm">
              <span className="text-sm font-medium text-white">Modern Healthcare Technology</span>
            </div>
            <h1 className="mb-6 font-poppins text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Modern Websites & AI for Medical & Dental Clinics
            </h1>
            <p className="mb-8 text-xl text-white/90 font-montserrat">
              Launch fast. Look professional. Automate patient engagement.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Link href="#packages">View Packages</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-blue-600 hover:bg-white/10 transition-all duration-300"
              >
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
      <section id="why" className="bg-gradient-to-b from-white to-blue-50/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center font-poppins text-3xl font-bold text-slate-800 md:text-4xl">
            Why Choose CareWeb
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-600 font-montserrat">
            We provide everything your clinic needs to establish a strong online presence and improve patient
            engagement.
          </p>
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
      <section id="packages" className="bg-blue-50 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        <div className="container relative mx-auto px-4 z-10">
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

          {/* Enhanced Add-ons Section */}
          <div className="mx-auto mt-16 max-w-4xl">
            <h3 className="mb-4 font-poppins text-2xl font-semibold text-slate-800 text-center">Available Add-ons</h3>
            <p className="mx-auto mb-8 max-w-2xl text-center text-slate-600 font-montserrat">
              Customize your package with these powerful add-ons to enhance your clinic's online presence.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <EnhancedAddOnCard
                title="Booking System"
                description="Allow patients to book appointments directly through your website with calendar integration."
                price={25}
                icon="Calendar"
              />
              <EnhancedAddOnCard
                title="Reviews Integration"
                description="Showcase your Google and Yelp reviews directly on your website to build trust with new patients."
                price={15}
                icon="Star"
              />
              <EnhancedAddOnCard
                title="Analytics Dashboard"
                description="Track website performance, patient engagement, and conversion metrics in real-time."
                price={20}
                icon="BarChart3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Improved Section Transition - Completely smooth */}
      <div className="relative h-32">
        <div className="absolute inset-x-0 top-0 h-full bg-blue-50"></div>
        <div
          className="absolute inset-x-0 top-0 h-full bg-white"
          style={{
            clipPath: "ellipse(70% 100% at 50% 100%)",
            background: "linear-gradient(to bottom, rgba(239, 246, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
          }}
        ></div>
      </div>

      {/* Demo Section - Enhanced with blue design elements */}
      <section id="demo" className="bg-white py-20 relative overflow-hidden">
        {/* Blue circuit pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#2563EB" strokeWidth="2">
              <path
                d="M769,229L1037,260.9M927,880L731,737.5M520,660.5L309,538.5M243,679L126.5,879.5M560,516.5L593,419M437,450.5L306.5,530M371,350.5L199.5,420.5"
                strokeDasharray="5,12"
              />
              <path
                d="M520,660.5L415,547M337,681L425.5,795.5M520,660.5L436.5,580M415,547L314,525.5M314,525.5L268.5,473M425.5,795.5L314,702.5M314,702.5L268.5,624"
                strokeDasharray="5,12"
              />
              <path
                d="M520,660.5L476.5,580.5M520,660.5L626.5,680.5M626.5,680.5L668,736.5M668,736.5L707,664.5M707,664.5L626.5,680.5M626.5,680.5L580.5,630.5"
                strokeDasharray="5,12"
              />
            </g>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-blue-100 px-4 py-1 mb-4">
              <span className="text-sm font-medium text-blue-600">Interactive Demo</span>
            </div>
            <h2 className="mb-6 text-center font-poppins text-3xl font-bold text-slate-800 md:text-4xl">
              Try Our AI Chatbot
            </h2>
            <p className="mx-auto mb-4 max-w-2xl text-center text-slate-600 font-montserrat">
              Test how the AI bot engages with patients. Ask questions about appointments, services, or general medical
              inquiries.
            </p>
          </div>

          {/* Blue frame around chatbot */}
          <div className="relative mx-auto max-w-2xl">
            {/* Decorative corner elements */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-blue-400 rounded-tl-lg"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-blue-400 rounded-tr-lg"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-blue-400 rounded-bl-lg"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-blue-400 rounded-br-lg"></div>

            {/* Pulse effect around chatbot */}
            <div className="absolute -inset-4 bg-blue-200/20 rounded-3xl blur-xl animate-pulse-slow"></div>

            <ChatbotDemo />
          </div>

          {/* Feature highlights below chatbot */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-100 shadow-sm flex items-start gap-3">
              <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-slate-800">24/7 Availability</h3>
                <p className="text-sm text-slate-600 font-montserrat">
                  Always ready to answer patient questions, even after hours
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-100 shadow-sm flex items-start gap-3">
              <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M12 18v-6"></path>
                  <path d="M8 15h8"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-slate-800">Custom Knowledge</h3>
                <p className="text-sm text-slate-600 font-montserrat">
                  Trained on your clinic's specific services and policies
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-100 shadow-sm flex items-start gap-3">
              <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-slate-800">Continuous Learning</h3>
                <p className="text-sm text-slate-600 font-montserrat">
                  Improves over time based on patient interactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gradient-to-b from-blue-50/50 to-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center font-poppins text-3xl font-bold text-slate-800 md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-600 font-montserrat">
            Don't just take our word for it. Here's what healthcare professionals are saying about CareWeb.
          </p>
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
      <section id="faq" className="bg-white py-20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="mb-4 text-center font-poppins text-3xl font-bold text-slate-800 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-600 font-montserrat">
            Get answers to common questions about our services, pricing, and implementation process.
          </p>
          <div className="mx-auto max-w-3xl rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-md backdrop-blur-sm">
            <EnhancedFaqAccordion />
          </div>
        </div>
      </section>

      {/* CTA Section - Beautiful and Interactive */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <InteractiveCTA />
        </div>
      </section>

      <Footer />
    </div>
  )
}
