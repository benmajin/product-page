import React from "react"
import useCart from "../../../Hooks/useCart"
import Cartitems from "./CartItems"
import EmptyCart from "./EmptyCart"

const CartDropdown = () => {
	const { cart } = useCart()

	return (
		<div className="sm:left absolute top-20 right-4 z-10 w-11/12 rounded-xl bg-white shadow-xl sm:w-96  ">
			<div className="border-b border-b-darkGrayishBlue/30 p-4 font-bold text-veryDarkBlue">
				Cart
			</div>
			{cart.length > 0 && <Cartitems items={cart} />}

			{cart.length < 1 && <EmptyCart />}
		</div>
	)
}

export default CartDropdown
