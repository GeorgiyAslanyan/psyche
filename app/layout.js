import './globals.css'

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
