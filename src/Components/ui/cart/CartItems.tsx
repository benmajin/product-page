import React from "react"
import { TCartItem } from "../../../Types/types"
import CartItem from "./CartItem"
import CheckoutLink from "./CheckoutLink"

const Cartitems = ({ items }: { items: TCartItem[] }) => {
	return (
		<div className="px-4 py-2">
			{items.map((item) => (
				<CartItem key={item.productName} item={item} />
			))}
			<CheckoutLink />
		</div>
	)
}

export default Cartitems
