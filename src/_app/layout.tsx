import '../styles/globals.scss';
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
