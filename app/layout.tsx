import "./globals.css"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "Rokon - Web Developer",
  description: "Portfolio of Rokon, a Next.js, Node.js, and React expert",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body>{children}</body>
    </html>
  )
}

