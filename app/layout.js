
import '@/styles/globals.scss'

export const metadata = {
  title: 'Alon Mlievski',
  description: 'The best',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
