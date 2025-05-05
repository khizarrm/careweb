"use client"

import { useEffect, useRef, useState } from "react"

interface TestimonialCardProps {
  initials: string
  name: string
  role: string
  quote: string
}

export function TestimonialCard({ initials, name, role, quote }: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Enhance the testimonial card with more interactive hover effects
  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      // More responsive tilt effect
      const tiltX = (y - centerY) / 20
      const tiltY = (centerX - x) / 20

      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`
      card.style.transition = "transform 0.1s ease"

      // Dynamic shadow based on mouse position
      const shadowX = (x - centerX) / 25
      const shadowY = (y - centerY) / 25
      card.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.1)`

      // Move the background circles based on mouse position
      const circles = card.querySelectorAll(".bg-circle")
      circles.forEach((circle: HTMLElement) => {
        const moveX = (x - centerX) / 15
        const moveY = (y - centerY) / 15
        circle.style.transform = `translate(${moveX}px, ${moveY}px)`
        circle.style.transition = "transform 0.3s ease"
      })
    }

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)"
      card.style.transition = "transform 0.5s ease, box-shadow 0.5s ease"
      card.style.boxShadow = ""

      // Reset circle positions
      const circles = card.querySelectorAll(".bg-circle")
      circles.forEach((circle: HTMLElement) => {
        circle.style.transform = "translate(0, 0)"
      })
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Update the return JSX to include the bg-circle class
  return (
    <div
      ref={cardRef}
      className="rounded-3xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg border-2 border-blue-100 hover:border-blue-200 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full -mr-16 -mt-16 bg-circle"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full -ml-12 -mb-12 bg-circle"></div>
      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-lg font-bold text-white shadow-md">
            {initials}
          </div>
          <div>
            <h3 className="font-poppins text-lg font-semibold text-slate-800">{name}</h3>
            <p className="text-sm text-slate-600">{role}</p>
          </div>
        </div>
        <blockquote className="text-slate-700 relative pl-4 before:content-['&quot;'] before:absolute before:left-0 before:top-0 before:text-blue-400 before:text-3xl before:font-serif before:opacity-50">
          {quote}
        </blockquote>
      </div>
    </div>
  )
}
