import Link from 'next/link'
import { GrCart } from 'react-icons/gr'
import { Button } from '../ui/button'

const CartButton = () => {
  //temp
  const numItemsInCart = 6
  return (
    <Button
      className="flex justify-center items-center relative"
      asChild
      variant="outline"
      size="icon"
    >
      <Link href="/cart">
        <GrCart className="h-5 w-5" />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  )
}

export default CartButton
