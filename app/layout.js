import './globals.css'

export const metadata = {
  title: 'CreatorOS - The Operating System for Content Creators',
  description: 'All-in-one platform for content planning, cross-platform publishing, audience analytics, and revenue tracking.',
  keywords: 'content creator, social media management, creator economy, analytics, content planning',
  authors: [{ name: 'CreatorOS Team' }],
  openGraph: {
    title: 'CreatorOS - The Operating System for Content Creators',
    description: 'Join 1000+ creators scaling their business with CreatorOS',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}