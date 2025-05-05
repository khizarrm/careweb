import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"

interface PackageCardProps {
  title: string
  setupPrice: number
  monthlyPrice: number
  features: string[]
  recommended: boolean
}

export function PackageCard({ title, setupPrice, monthlyPrice, features, recommended }: PackageCardProps) {
  return (
    <div
      className={`relative rounded-3xl p-6 shadow-lg transition-all hover:shadow-xl ${
        recommended ? "bg-gradient-to-br from-blue-600 to-blue-500 text-white" : "bg-white text-slate-800"
      }`}
    >
      {recommended && (
        <div className="absolute -top-4 right-4 rounded-full bg-white px-4 py-1 text-sm font-semibold text-blue-600 shadow-md">
          Recommended
        </div>
      )}
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
        className={`w-full ${
          recommended ? "bg-white text-blue-600 hover:bg-blue-50" : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        <a href="#contact">Get Started</a>
      </Button>
    </div>
  )
}
