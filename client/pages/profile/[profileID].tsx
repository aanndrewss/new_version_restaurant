import React from 'react'
import { userAPI } from '../../services/UserService'
import { useRouter } from 'next/router'
import { skipToken } from '@reduxjs/toolkit/query'

const ProfilePage = () => {

	const router = useRouter()
	const { profileID } = router.query
	const { data: user } = userAPI.useFetchUserQuery(profileID ? profileID : skipToken)

	return (
		<div>
			{user && user.gender}
			{user && user.email}
		</div>
	)
}

export default ProfilePage
