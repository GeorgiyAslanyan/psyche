import './globals.css'
import { Inter, IBM_Plex_Sans, Roboto_Mono } from 'next/font/google'

const ibm = IBM_Plex_Sans({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })
const roboto = Roboto_Mono({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'PSYCHE | ETHEREUM',
  description: 'Psyche is supposed to have limited depoist of Etherium in addition to metal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
