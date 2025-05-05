"use client"

import { Check } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface AddOnCardProps {
  title: string
}

export function AddOnCard({ title }: AddOnCardProps) {
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

      // Subtle tilt effect for small cards
      const tiltX = (y - centerY) / 30
      const tiltY = (centerX - x) / 30

      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`
      card.style.transition = "transform 0.1s ease"
    }

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)"
      card.style.transition = "transform 0.5s ease"
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
      className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-md border border-blue-100 hover:border-blue-300 transition-all duration-300 group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/5 rounded-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150"></div>
      <div className="rounded-full bg-blue-100 p-1.5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 z-10">
        <Check size={16} />
      </div>
      <span className="font-medium text-slate-700 group-hover:text-blue-600 transition-all duration-300 z-10">
        {title}
      </span>
    </div>
  )
}
