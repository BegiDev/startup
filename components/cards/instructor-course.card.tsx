import Image from 'next/image'
import { ICourse } from '@/app.types'
import { Badge } from '../ui/badge'

interface Props {
	course: ICourse
}

function InstructorCourseCard({ course }: Props) {
	return (
		<div className='flex flex-col space-y-2 rounded-md bg-background p-2'>
			<div className='relative h-52 w-full'>
				<Image
					src={course.previewImage}
					alt={course.title}
					fill
					className='rounded-md object-cover'
				/>
			</div>
			<div className='flex items-center justify-between px-2'>
				<h1 className='font-space-grotesk text-2xl font-bold'>
					{course.title}
				</h1>
				<Badge variant={course.published ? 'default' : 'destructive'}>
					{course.published ? 'Published' : 'Draft'}
				</Badge>
			</div>
		</div>
	)
}

export default InstructorCourseCard
