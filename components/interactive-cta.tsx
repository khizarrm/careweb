"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, ArrowRight, Check } from "lucide-react"

export function InteractiveCTA() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const [particles, setParticles] = useState<React.ReactNode[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map((_, i) => (
      <div
        key={i}
        className="particle absolute rounded-full bg-white/10 transition-transform duration-1500"
        style={{
          width: `${Math.random() * 100 + 50}px`,
          height: `${Math.random() * 100 + 50}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.3,
          transform: "translate(0, 0)",
        }}
      />
    ))
    setParticles(generated)
  }, [])


  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 3000)
    }
  }

  // Button hover effect
  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      button.style.setProperty("--x", `${x}px`)
      button.style.setProperty("--y", `${y}px`)
    }

    button.addEventListener("mousemove", handleMouseMove)
    return () => button.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 p-8 md:p-12 shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background particles */}
      {particles}

      {/* Glowing effect that follows mouse */}
      <div
        className="absolute bg-white/10 rounded-full blur-3xl transition-all duration-1000"
        style={{
          width: "500px",
          height: "500px",
          left: `${mousePosition.x - 250}px`,
          top: `${mousePosition.y - 250}px`,
          opacity: isHovered ? 0.12 : 0,
          transform: `scale(${isHovered ? 1 : 0.5})`,
        }}
      />

      <div className="relative z-10">
        <div className="mb-8 text-center">
          <div className="inline-block rounded-full bg-white/10 px-4 py-1 mb-4 backdrop-blur-sm">
            <span className="text-sm font-medium text-white">Get Started Today</span>
          </div>
          <h2 className="mb-4 font-poppins text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Ready to modernize your clinic?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90 font-montserrat">
            We'll handle the tech — you focus on care.
          </p>
        </div>

        <div className="mx-auto max-w-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 pr-12"
                required
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60">
                <Send size={18} />
              </div>
            </div>

            {/* Centered buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                ref={buttonRef}
                type="submit"
                className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 h-12 relative overflow-hidden"
              >
                <span className="relative z-10">Request a Demo</span>
                <span
                  className="absolute inset-0 bg-blue-50 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at var(--x) var(--y), rgba(219, 234, 254, 0.4) 0%, transparent 50%)",
                  }}
                />
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-white/30 text-blue-600 hover:bg-white/10 transition-all duration-300 h-12"
              >
                <a href="mailto:contact@careweb.com" className="flex items-center gap-2">
                  Email Us <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </form>

          {isSubmitted && (
            <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-md p-3 flex items-center gap-2 text-white animate-fadeIn">
              <div className="rounded-full bg-green-500/20 p-1">
                <Check size={16} />
              </div>
              <span>Thank you! We'll be in touch soon.</span>
            </div>
          )}

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm font-montserrat">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
              <span>Usually responds within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
              <span>Free consultation call</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
