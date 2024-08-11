'use server'

import Course from '@/database/course.model'
import { connectToDatabase } from '@/lib/mongoose'
import { ICreateCourse } from './types'
import { revalidatePath } from 'next/cache'

export const createCourse = async (data: ICreateCourse) => {
	try {
		await connectToDatabase()
		await Course.create(data)
		revalidatePath('/en/instructor/my-courses')
	} catch (error) {
		console.error('Error creating course:', error)
		throw new Error('Something went wrong while creating course!')
	}
}

export const getCourses = async () => {
	try {
		await connectToDatabase()
		const courses = await Course.find()
		return courses
	} catch (err) {
		console.error('Error fetching courses:', err)
		throw new Error('Something went wrong while getting courses!')
	}
}
