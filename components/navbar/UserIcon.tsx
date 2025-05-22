import { LuUserRound } from 'react-icons/lu'
import { currentUser, auth } from '@clerk/nextjs/server'

async function UserIcon() {
  // const { userId } = auth()
  const user = await currentUser()
  const profileImage = user?.imageUrl
  if (profileImage) {
    return (
      <img
        className="w-6 h-6 rounded-full object-cover"
        src={profileImage}
        alt="current user image"
      />
    )
  }
  return (
    <LuUserRound className="w-6 h-6 bg-primary rounded-full text-white"></LuUserRound>
  )
}

export default UserIcon
