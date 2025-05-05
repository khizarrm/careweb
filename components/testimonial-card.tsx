export interface TestimonialCardProps {
  initials: string
  name: string
  role: string
  quote: string
}

export function TestimonialCard({ initials, name, role, quote }: TestimonialCardProps) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
          {initials}
        </div>
        <div>
          <h3 className="font-poppins text-lg font-semibold text-slate-800">{name}</h3>
          <p className="text-sm text-slate-600">{role}</p>
        </div>
      </div>
      <blockquote className="text-slate-700">"{quote}"</blockquote>
    </div>
  )
}
