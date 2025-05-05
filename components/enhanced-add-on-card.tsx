"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, Star, BarChart3, PlusCircle } from "lucide-react"

interface EnhancedAddOnCardProps {
  title: string
  description: string
  icon: "Calendar" | "Star" | "BarChart3"
}

export function EnhancedAddOnCard({ title, description, icon }: EnhancedAddOnCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Interactive hover effect
  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      // Subtle tilt effect
      const tiltX = (y - centerY) / 30
      const tiltY = (centerX - x) / 30

      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`
      card.style.transition = "transform 0.1s ease"

      // Dynamic shadow based on mouse position
      const shadowX = (x - centerX) / 25
      const shadowY = (y - centerY) / 25
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

  // Render the appropriate icon
  const renderIcon = () => {
    switch (icon) {
      case "Calendar":
        return <Calendar size={24} />
      case "Star":
        return <Star size={24} />
      case "BarChart3":
        return <BarChart3 size={24} />
      default:
        return <Calendar size={24} />
    }
  }

  return (
    <a
      href="#contact"
      className="rounded-xl bg-white p-6 shadow-md border border-blue-100 hover:border-blue-300 transition-all duration-300 group relative overflow-hidden block cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/5 rounded-full -mr-20 -mt-20 transition-transform duration-500 group-hover:scale-150"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-400/5 rounded-full -ml-10 -mb-10 transition-transform duration-500 group-hover:scale-150"></div>

      {/* Icon */}
      <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600 inline-block group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
        {renderIcon()}
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 mb-4 text-sm">{description}</p>

      {/* Price tag */}
      <div className="flex items-center justify-between mb-4">
        <div className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">Popular add-on</div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </a>
  )
}
