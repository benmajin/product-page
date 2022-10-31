import React, { useState } from "react"

import DiscountBadge from "./DiscountBadge"
import QuantityInput from "./QuantityInput"
import ButtonAddToCart from "./ButtonAddToCart"

import ProductImage from "./ProductImage"

const Product = () => {
	return (
		<div className="mx-auto max-w-screen-xl md:flex md:items-center md:px-10 md:py-12">
			<ProductImage isInsideLightBox={false} />

			<div className="space-y-3 p-4 md:w-4/5 md:space-y-6 md:px-20 md:py-0">
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
				<div className="sm:flex sm:space-x-4 ">
					<QuantityInput />
					<ButtonAddToCart />
				</div>
			</div>
		</div>
	)
}

export default Product
