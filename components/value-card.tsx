"use client"

import { HeadsetIcon as HeadsetHelp, Layout, MessageSquareText } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface ValueCardProps {
  icon: string
  title: string
  description: string
}

export function ValueCard({ icon, title, description }: ValueCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Map string icon names to actual Lucide icon components
  const getIcon = () => {
    switch (icon) {
      case "Layout":
        return <Layout size={32} />
      case "MessageSquareText":
        return <MessageSquareText size={32} />
      case "HeadsetHelp":
        return <HeadsetHelp size={32} />
      default:
        return <Layout size={32} />
    }
  }

  // 3D tilt effect
  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      // More pronounced tilt effect with smoother transition
      const tiltX = (y - centerY) / 15
      const tiltY = (centerX - x) / 15

      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03, 1.03, 1.03)`
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

  return (
    <div
      ref={cardRef}
      className="flex flex-col items-center rounded-3xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg border-2 border-blue-100 hover:border-blue-200 relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 -z-10"></div>
      <div className="absolute -right-12 -top-12 w-24 h-24 bg-blue-400/10 rounded-full transform group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute -left-12 -bottom-12 w-24 h-24 bg-blue-400/10 rounded-full transform group-hover:scale-150 transition-transform duration-700"></div>

      <div className="mb-4 rounded-full bg-blue-100 p-4 text-blue-600 shadow-inner shadow-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
        {getIcon()}
      </div>
      <h3 className="mb-2 font-poppins text-xl font-semibold text-slate-800">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  )
}
