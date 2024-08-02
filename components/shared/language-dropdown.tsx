import { Languages } from 'lucide-react'
import { Button } from '../ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import Image from 'next/image'
import { lngs } from '@/constants'

function LanguageDropdown() {
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant={'ghost'} size={'icon'}>
						<Languages />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='w-42'>
					<DropdownMenuGroup>
						{lngs.map(item => (
							<DropdownMenuItem key={item.route} className='cursor-pointer'>
								<Image
									src={`/assets/locales/${item.route}.png`}
									alt={item.label}
									height={30}
									width={30}
								/>
								<span className='ml-2 font-space-grotesk font-medium'>
									{item.label}
								</span>
							</DropdownMenuItem>
						))}
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export default LanguageDropdown
