export const metadata = {
  title: 'Portifólio | Gabriel Nascimento',
  description: 'Meu portifólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
