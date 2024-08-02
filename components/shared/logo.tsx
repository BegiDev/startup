import Link from 'next/link'

function Logo() {
	return (
		<Link href={'/'} className='flex items-center gap-2'>
			<h1 className='font-space-grotesk text-4xl font-bold'>BegiDev</h1>
		</Link>
	)
}

export default Logo
