import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.scss"
import { SITE_NAME } from "@/constants/seo.constants"
import BaseLayout from "@/components/Base/BaseLayout"

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900"
})
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900"
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description:
		"Amazon Lex AI powered chatbot, that can help you with any questions you have about the world around you."
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<BaseLayout>{children}</BaseLayout>
			</body>
		</html>
	)
}
