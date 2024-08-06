import { ChildProps } from '@/types'
import Navbar from './_components/navbar'
import Footer from './_components/footer'

function layout({ children }: ChildProps) {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default layout
