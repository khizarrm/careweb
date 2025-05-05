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
    <footer className="bg-white py-10 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <h2 className="text-xl font-semibold text-blue-600">CareWeb</h2>
            <p className="text-sm mt-1">Modern websites & AI tools for clinics.</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-medium">Navigation</h3>
            <ul className="space-y-0.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:underline text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium">Contact</h3>
            <p className="text-sm">
              Email:{" "}
              <a href="mailto:khizar@careweb.ca" className="text-blue-600 hover:underline">
                khizar@careweb.ca
              </a>
            </p>
            <p className="text-sm mt-1">Ottawa, Canada</p>
            <p className="text-sm mt-1">Kigali, Rwanda</p>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          &copy; {currentYear} CareWeb. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
