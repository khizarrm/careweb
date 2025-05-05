import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Packages", href: "#packages" },
    { name: "Demo", href: "#demo" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-white py-8 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>


        <div className="mt-8 text-center text-sm text-slate-500">
          &copy; {currentYear} CareWeb. All rights reserved.
        </div>

    </footer>
  )
}
