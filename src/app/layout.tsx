import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.scss"
import { SITE_NAME } from "@/constants/seo.constants"
import BaseLayout from "@/components/Base/BaseLayout"
import { Providers } from "./providers"
import { Toaster } from "sonner"

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
		"Clever Gallery is a web application that allows users to upload images and receive detailed descriptions of the objects in the images. The application uses Amazon Rekognition to analyze the images and extract information about the objects in the images."
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
				<Providers>
					<BaseLayout>{children}</BaseLayout>
					<Toaster
						theme='dark'
						position='bottom-right'
						duration={1500}
					/>
				</Providers>
			</body>
		</html>
	)
}
