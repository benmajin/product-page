import React from "react"
import { images } from "../../../utils/images"
import { TCartItem } from "../../../Types/types"
import DeleteItem from "../../Cart/DeleteItem"

const CartItem = ({ item }: { item: TCartItem }) => {
	return (
		<div className="flex items-center justify-between py-4">
			<div className="overflow-hidden ">
				<img
					src={images[0]}
					alt="autunm limited edition"
					className="w-10 rounded-lg"
				/>
			</div>
			<div>
				<div className="text-darkGrayishBlue">{item.productName}</div>
				<div className="flex space-x-4">
					<div className="text-darkGrayishBlue">{`$125.00 x ${item.quantity}`}</div>
					<div className="font-bold">{`$${item.totalProduct.toFixed(2)}`}</div>
				</div>
			</div>
			<DeleteItem />
		</div>
	)
}

export default CartItem
