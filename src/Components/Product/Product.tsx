import React, { useState } from "react"

import DiscountBadge from "../ui/Product/DiscountBadge"
import QuantityInput from "./QuantityInput"
import ButtonAddToCart from "../ui/Product/ButtonAddToCart"

import ProductImage from "./ProductImage"
import useCart from "../../Hooks/useCart"

const Product = () => {
	const [quantity, setQuantity] = useState(0)
	const { setCart } = useCart()

	const handleAddToCart = (e: React.FormEvent) => {
		e.preventDefault()
		if (quantity === 0) return
		setCart([
			{
				productName: "Fall Limited Edition Sneakers",
				price: 125.0,
				quantity: quantity,
				totalProduct: quantity * 125.0,
			},
		])
	}
	return (
		<div className="mx-auto max-w-screen-xl md:flex md:items-center md:px-10 md:py-10">
			<ProductImage isInsideLightBox={false} />

			<div className="mx-auto w-11/12 space-y-3 p-4 md:space-y-6 md:px-4 lg:px-20">
				<div className="text-xs font-bold uppercase text-orange">
					Sneaker Company
				</div>
				<div className="text-3xl font-bold capitalize text-veryDarkBlue md:text-4xl">
					Fall Limited Edition Sneakers
				</div>
				<p className="font-normal text-darkGrayishBlue">
					These low-profile sneakers are your perfect casual wear companion.
					Featuring a durable rubber outer sole, they’ll withstand everything the
					weather can offer.
				</p>
				<div className="flex items-center justify-between md:block md:py-4">
					<div className="flex items-center space-x-4 py-3 md:py-0">
						<div className="text-3xl font-bold">$125.00</div>
						<DiscountBadge>50%</DiscountBadge>
					</div>
					<div className="text-lg font-bold text-darkGrayishBlue line-through">
						$250.00
					</div>
				</div>
				<form
					onSubmit={handleAddToCart}
					className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ">
					<QuantityInput setQuantity={setQuantity} quantity={quantity} />
					<ButtonAddToCart />
				</form>
			</div>
		</div>
	)
}

export default Product
