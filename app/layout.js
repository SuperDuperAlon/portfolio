
import '@/styles/globals.scss'

export const metadata = {
  title: 'Alon Mlievski',
  description: 'Alon Mlievski\'s Professional Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
