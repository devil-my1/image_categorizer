import { PropsWithChildren } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"

export default function BaseLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<main className='welcome-container'>
			<Header />
			{children}
			<Footer />
		</main>
	)
}
