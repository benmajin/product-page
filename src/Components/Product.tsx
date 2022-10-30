import React, { useState } from "react"
import ImageProduct1 from "../assets/images/image-product-1.jpg"
import ImageProduct2 from "../assets/images/image-product-2.jpg"
import ImageProduct3 from "../assets/images/image-product-3.jpg"
import ImageProduct4 from "../assets/images/image-product-4.jpg"
import thumbnailImage1 from "../assets/images/image-product-1-thumbnail.jpg"
import thumbnailImage2 from "../assets/images/image-product-2-thumbnail.jpg"
import thumbnailImage3 from "../assets/images/image-product-3-thumbnail.jpg"
import thumbnailImage4 from "../assets/images/image-product-4-thumbnail.jpg"

import IconNext from "../assets/images/icon-next.svg"
import IconPrev from "../assets/images/icon-previous.svg"
import DiscountBadge from "./DiscountBadge"
import QuantityInput from "./QuantityInput"
import ButtonAddToCart from "./ButtonAddToCart"

import clsx from "clsx"
import LightBox from "./LightBox"

const Product = () => {
	const images = [ImageProduct1, ImageProduct2, ImageProduct3, ImageProduct4]
	const thumbnailsImage = [
		thumbnailImage1,
		thumbnailImage2,
		thumbnailImage3,
		thumbnailImage4,
	]
	const [indexActiveImage, setIndexActiveImage] = useState<number>(0)
	const [isModalShowing, setIsModalShowing] = useState<boolean>(false)

	const showNextImage = () => {
		if (indexActiveImage + 1 === images.length) {
			setIndexActiveImage(0)
			return
		}
		setIndexActiveImage((prev) => prev + 1)
	}

	const showPreviousImage = () => {
		if (indexActiveImage === 0) {
			setIndexActiveImage(images.length - 1)
			return
		}
		setIndexActiveImage((prev) => prev - 1)
	}

	const selectImageFromThumbnail = (index: number) => {
		setIndexActiveImage(index)
	}
	return (
		<div className="mx-auto max-w-screen-xl md:flex md:items-center md:px-10 md:py-12">
			<div className="relative overflow-hidden">
				<img
					src={images[indexActiveImage]}
					className="h-full cursor-pointer object-cover md:rounded-3xl "
					onClick={() => setIsModalShowing(true)}
				/>
				<button
					onClick={showNextImage}
					className="absolute bottom-1/2 right-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white md:hidden">
					<img src={IconNext} className="h-4 object-cover"></img>
				</button>

				<button
					onClick={showPreviousImage}
					className="absolute bottom-1/2 left-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white md:hidden">
					<img src={IconPrev} className="h-4 object-cover"></img>
				</button>
				<div className="flex space-x-8">
					{thumbnailsImage.map((thumbnail, index) => (
						<div
							className="relative mt-6 cursor-pointer overflow-hidden"
							key={index}
							onClick={() => selectImageFromThumbnail(index)}>
							<img src={thumbnail} className=" rounded-xl"></img>
							<span
								className={clsx(
									"absolute inset-0 rounded-xl hover:border-2 hover:border-orange hover:bg-lightGrayishBlue/70",
									indexActiveImage === index
										? "border-2 border-orange bg-lightGrayishBlue/70"
										: ""
								)}
							/>
						</div>
					))}
				</div>
			</div>
			{isModalShowing && <LightBox />}
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
