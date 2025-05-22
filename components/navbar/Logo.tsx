import { FaHandsPraying } from 'react-icons/fa6'
import { Button } from '../ui/button'
import Link from 'next/link'

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <FaHandsPraying className="w-6 h-6" />
      </Link>
    </Button>
  )
}

export default Logo
