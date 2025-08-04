import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Claude Code講座 - AIプログラミングの未来を学ぼう',
  description: 'Claude Codeを使ったプログラミング講座。AIと一緒にコーディングを学び、実践的なスキルを身につけましょう。',
  keywords: 'Claude Code, AIプログラミング, プログラミング講座, コーディング, 開発',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 