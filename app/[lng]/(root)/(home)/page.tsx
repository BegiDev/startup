'use client'

import { useTranslation } from '@/i18n/client'
import { useParams } from 'next/navigation'

function Page() {
	const { lng } = useParams()
	const { t } = useTranslation(lng as string)

	return <div className='font-space-grotesk mt-24'>{t('Home')}</div>
}

export default Page
