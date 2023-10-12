import './globals.css'
import { Inter, IBM_Plex_Sans } from 'next/font/google'

const ibm = IBM_Plex_Sans({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })

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
