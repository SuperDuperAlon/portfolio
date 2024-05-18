
import '@/styles/globals.scss'
import Social_MB from './cmps/social-menu-mb'

export const metadata = {
  title: 'Alon Mlievski',
  description: 'Alon Mlievski\'s Professional Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
        <Social_MB />
      </body>
    </html>
  )
}
