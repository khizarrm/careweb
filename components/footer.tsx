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
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Link
            href="#home"
            className="font-poppins text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300"
          >
            CareWeb
          </Link>

          <nav>
            <ul className="flex flex-wrap items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors duration-300 hover:text-blue-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 text-center text-sm text-slate-500">
          &copy; {currentYear} CareWeb. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
