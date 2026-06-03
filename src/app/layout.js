import './globals.css'

export const metadata = {
  title: "Sonali's 25th Birthday 🎂✨",
  description: "An interactive cinematic birthday experience for Sonali's 25th birthday",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-darkBg overflow-hidden w-full h-screen">
        {children}
      </body>
    </html>
  )
}
