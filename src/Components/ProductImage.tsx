import React, { useEffect, useState } from "react"
import ImageProduct1 from "../assets/images/image-product-1.jpg"
import ImageProduct2 from "../assets/images/image-product-2.jpg"
import ImageProduct3 from "../assets/images/image-product-3.jpg"
import ImageProduct4 from "../assets/images/image-product-4.jpg"

import IconNext from "../assets/images/icon-next.svg"
import IconPrev from "../assets/images/icon-previous.svg"
import Thumbnails from "./Thumbnails"
import ButtonControlCarousel from "./ButtonControlCarousel"
import clsx from "clsx"
import LightBox from "./LightBox"
import useIsWindowSmall from "./Hooks/useIsWindowSmall"

const images = [ImageProduct1, ImageProduct2, ImageProduct3, ImageProduct4]

const ProductImage = ({ isInsideLightBox }: { isInsideLightBox: boolean }) => {
	const [indexActiveImage, setIndexActiveImage] = useState<number>(0)
	const [isModalShowing, setIsModalShowing] = useState<boolean>(false)
	const isWindowSmall = useIsWindowSmall()
	console.log(isWindowSmall)

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
		<>
			<div className="relative">
				<img
					src={images[indexActiveImage]}
					className="h-full cursor-pointer object-cover md:rounded-3xl "
					onClick={() => setIsModalShowing(true)}
				/>

				{isInsideLightBox || isWindowSmall ? (
					<div className="absolute bottom-1/2 flex w-full justify-between px-4">
						<ButtonControlCarousel handleClick={showPreviousImage} icon={IconPrev} />
						<ButtonControlCarousel handleClick={showNextImage} icon={IconNext} />
					</div>
				) : null}

				<div className={clsx(isInsideLightBox ? "px-8" : "px-0")}>
					<Thumbnails
						indexActiveImage={indexActiveImage}
						selectImageFromThumbnail={selectImageFromThumbnail}
					/>
				</div>
			</div>
			{isModalShowing && (
				<LightBox
					setIsModalShowing={setIsModalShowing}
					showPreviousImage={showPreviousImage}
					showNextImage={showNextImage}
				/>
			)}
		</>
	)
}

export default ProductImage
