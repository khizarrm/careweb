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
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Link href="#home" className="font-poppins text-xl font-bold text-blue-600">
            CareWeb
          </Link>

          <nav>
            <ul className="flex flex-wrap items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-600 transition-colors hover:text-blue-500">
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
