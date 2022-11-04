import React from "react"
import { TCartItem } from "../Types/types"
import CartItem from "./CartItem"

const Cartitems = ({ items }: { items: TCartItem[] }) => {
	return (
		<div>
			{items.map((item) => (
				<CartItem key={item.productName} item={item} />
			))}
		</div>
	)
}

export default Cartitems
