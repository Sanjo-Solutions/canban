import type { Metadata } from 'next'
import './custom.scss'
import '@aws-amplify/ui-react/styles.css'
import { Inter } from 'next/font/google'
import { ConfigureAmplifyClientSide } from '@/components/ConfigureAmplify'
import { LayoutInner } from '@/components/LayoutInner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Canban',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ConfigureAmplifyClientSide />
        <LayoutInner>{children}</LayoutInner>
      </body>
    </html>
  )
}
