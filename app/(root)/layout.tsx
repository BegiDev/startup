import { ChildProps } from '@/types'
import Navbar from './_components/navbar'

function layout({ children }: ChildProps) {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
		</div>
	)
}

export default layout
