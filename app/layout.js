import './globals.css'
import { Inter, IBM_Plex_Sans } from 'next/font/google'

const ibm = IBM_Plex_Sans({ subsets: ['latin'], weight: "600" })

export const metadata = {
  title: 'Psyche',
  description: 'Psyche is supposed to have limited depoist of Etherium in addition to metal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ibm.className}>{children}</body>
    </html>
  )
}
