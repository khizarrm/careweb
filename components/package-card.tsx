"use client"

import { Check } from "lucide-react"
import { useEffect, useMemo, useRef, useState } from "react"

import { Button } from "@/components/ui/button"

interface PackageCardProps {
  title: string
  setupPrice: number
  monthlyPrice: number
  features: string[]
  recommended: boolean
}

export function PackageCard({ title, setupPrice, monthlyPrice, features, recommended }: PackageCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const [floatingDots, setFloatingDots] = useState<{ top: string; left: string; animationDuration: string; animationDelay: string; }[]>([])

  useEffect(() => {
    const dots = [...Array(15)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${5 + Math.random() * 7}s`,
      animationDelay: `${Math.random() * 5}s`,
    }))
    setFloatingDots(dots)
  }, [])


  // Enhanced hover effect with smoother transition
  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      // More subtle tilt with smoother transition
      const tiltX = (y - centerY) / 25
      const tiltY = (centerX - x) / 25

      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`
      card.style.transition = "transform 0.1s ease"

      // Dynamic shadow based on mouse position
      const shadowX = (x - centerX) / 30
      const shadowY = (y - centerY) / 30
      card.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.1)`
    }

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)"
      card.style.transition = "transform 0.5s ease, box-shadow 0.5s ease"
      card.style.boxShadow = ""
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])


  return (
    <div
      ref={cardRef}
      className={`relative rounded-3xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden ${
        recommended
          ? "bg-gradient-to-br from-blue-600 to-blue-500 text-white"
          : "bg-white text-slate-800 border-2 border-blue-100 hover:border-blue-200"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Moved recommendation tag to top left */}
      {recommended && (
        <div className="absolute top-4 right-4 bg-white text-blue-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md z-20">
          Recommended
        </div>
      )}
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full -mr-20 -mt-20 z-0"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/10 rounded-full -ml-20 -mb-20 z-0"></div>

      {/* Animated particles for recommended card - FIXED with slower animation */}
      {recommended && floatingDots.length > 0 && (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {floatingDots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
            style={{
              top: dot.top,
              left: dot.left,
              animation: `float ${dot.animationDuration} infinite ease-in-out`,
              animationDelay: dot.animationDelay,
            }}
          />
        ))}
      </div>
    )}



      <div className="relative z-10">
        <h3 className="mb-2 font-poppins text-2xl font-bold">{title}</h3>
        <div className="mb-6">
          <span className="text-3xl font-bold">${setupPrice}</span>
          <span className={recommended ? "text-white/80" : "text-slate-600"}> setup</span>
          <span className="mx-2">·</span>
          <span className="text-2xl font-bold">${monthlyPrice}</span>
          <span className={recommended ? "text-white/80" : "text-slate-600"}>/month</span>
        </div>
        <ul className="mb-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div
                className={`mt-1 rounded-full p-1 ${
                  recommended ? "bg-white/20 text-white" : "bg-blue-100 text-blue-600"
                }`}
              >
                <Check size={14} />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          asChild
          className={`w-full ${
            recommended
              ? "bg-white text-blue-600 hover:bg-blue-50 hover:scale-105"
              : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
          } transition-all duration-300`}
        >
          <a href="#contact">Get Started</a>
        </Button>
      </div>
    </div>
  )
}
