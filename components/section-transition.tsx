export function SectionTransition() {
  return (
    <div className="relative h-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Curved transition */}
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-0 h-24 w-full fill-blue-50"
        style={{ transform: "rotateX(180deg)" }}
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
      </svg>

      {/* Decorative elements */}
      <div
        className="absolute top-0 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping"
        style={{ animationDuration: "4s" }}
      ></div>
      <div
        className="absolute top-1/2 left-2/3 w-1 h-1 bg-blue-400 rounded-full animate-ping"
        style={{ animationDuration: "2.5s" }}
      ></div>
      <div
        className="absolute bottom-1/3 left-3/4 w-2 h-2 bg-blue-300 rounded-full animate-ping"
        style={{ animationDuration: "3.5s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-ping"
        style={{ animationDuration: "4.5s" }}
      ></div>
    </div>
  )
}
