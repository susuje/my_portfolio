import type { Metadata } from 'next'
import StyledComponentsRegistry from './lib/register'

export const metadata: Metadata = {
  title: 'my portfolio',
  description: 'Next.js를 사용한 포트폴리오',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
