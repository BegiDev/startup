import TopBar from '@/components/shared/top-bar'
import AllCourses from './_components/all-courses'

function Page() {
	return (
		<div>
			<TopBar label='allCourses' description='allCourseDescription' />
			<AllCourses />
		</div>
	)
}

export default Page
