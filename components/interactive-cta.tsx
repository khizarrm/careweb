"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function InteractiveCTA() {
  const [selectedPlan, setSelectedPlan] = useState("The Pro Plan")
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [particles, setParticles] = useState<React.ReactNode[]>([])

  const plans = ["The Pro Plan", "The Standard Plan", "Other"]
  const addOns = ["Booking System", "Reviews Integration", "Analytics Dashboard"]

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

  const toggleAddOn = (addOn: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(addOn) ? prev.filter((a) => a !== addOn) : [...prev, addOn]
    )
  }

  const buildMailtoLink = () => {
    const subject = `Demo Inquiry - ${selectedPlan}`
    let body = `Hi, we are interested in the ${selectedPlan.toLowerCase()} and would like to request a demo.`

    if (selectedAddOns.length > 0) {
      body += `\n\nWe're also interested in the following add-ons:\n${selectedAddOns
        .map((opt) => `- ${opt}`)
        .join("\n")}`
    }

    body += `\n\nPlease let us know the next steps.`

    return `mailto:khizarmalik2003@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 p-8 md:p-12 shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={(e) => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (rect) {
          setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          })
        }
      }}
    >
      {/* Animated particles */}
      {particles}

      {/* Glowing blur that follows mouse */}
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
            Select what you're interested in and we'll reach out.
          </p>
        </div>

        <div className="mx-auto max-w-md space-y-6 text-white font-montserrat">
          {/* Plan Dropdown */}
          <div>
            <p className="mb-2 text-white/80">I’m interested in a plan:</p>
            <select
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className="w-full h-12 rounded-md border border-white/30 bg-white/10 text-white px-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              {plans.map((plan) => (
                <option key={plan} value={plan}>
                  {plan}
                </option>
              ))}
            </select>
          </div>

          {/* Add-on Checkboxes */}
          <div>
            <p className="mb-2 text-white/80">Optional add-ons:</p>
            <div className="space-y-2">
              {addOns.map((addOn) => (
                <label key={addOn} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    value={addOn}
                    checked={selectedAddOns.includes(addOn)}
                    onChange={() => toggleAddOn(addOn)}
                    className="h-4 w-4 text-blue-500 bg-blue-500 border-white/30 rounded focus:ring-0"
                  />
                  <span>{addOn}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
          <a
            href={buildMailtoLink()}
            className="inline-flex items-center justify-center gap-2 border border-white/30 text-blue-600 bg-white hover:bg-white/90 transition-all duration-300 h-12 px-6 rounded-md shadow-md font-medium"
          >
            Email Us <ArrowRight size={16} />
          </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
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
