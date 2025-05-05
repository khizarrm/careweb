import { HeadsetIcon as HeadsetHelp, Layout, MessageSquareText } from "lucide-react"

interface ValueCardProps {
  icon: string
  title: string
  description: string
}

export function ValueCard({ icon, title, description }: ValueCardProps) {
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

  return (
    <div className="flex flex-col items-center rounded-3xl bg-white p-6 text-center shadow-md transition-all hover:shadow-lg">
      <div className="mb-4 rounded-full bg-blue-100 p-4 text-blue-600">{getIcon()}</div>
      <h3 className="mb-2 font-poppins text-xl font-semibold text-slate-800">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  )
}
