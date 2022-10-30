import React from "react"
import iconCart from "../assets/images/icon-cart.svg"

const CartIcon = () => {
	return (
		<div className="relative">
			<img src={iconCart} alt="cart icon"></img>
			<span className="absolute -top-2 left-2 rounded-lg bg-orange px-2 text-xs font-bold text-white">
				3
			</span>
		</div>
	)
}

export default CartIcon
