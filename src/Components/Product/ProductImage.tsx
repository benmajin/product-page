import React, { useState } from "react"

import { images } from "../../utils/images"

import Thumbnails from "../ui/Product/Thumbnails"
import LightBox from "../ui/Product/LightBox"
import CarouselControl from "./CarouselControl"
import ActiveImage from "../ui/Product/ActiveImage"
import useIsWindowSmall from "../../Hooks/useIsWindowSmall"

const ProductImage = ({ isInsideLightBox }: { isInsideLightBox: boolean }) => {
	const [indexActiveImage, setIndexActiveImage] = useState<number>(0)
	const [isModalShowing, setIsModalShowing] = useState<boolean>(false)
	const isWindowSmall = useIsWindowSmall()

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

	const handleLightBoxOpening = () => {
		if (isInsideLightBox) return

		setIsModalShowing(true)
	}
	return (
		<>
			<div className="relative w-full overflow-hidden md:max-w-sm">
				<ActiveImage
					handleLightBoxOpening={handleLightBoxOpening}
					indexActiveImage={indexActiveImage}
				/>

				<CarouselControl
					showNextImage={showNextImage}
					showPreviousImage={showPreviousImage}
					isInsideLightBox={isInsideLightBox}
				/>

				<Thumbnails
					indexActiveImage={indexActiveImage}
					selectImageFromThumbnail={selectImageFromThumbnail}
					isInsideLightBox={isInsideLightBox}
				/>
			</div>
			{isModalShowing && !isWindowSmall && (
				<LightBox setIsModalShowing={setIsModalShowing} />
			)}
		</>
	)
}

export default ProductImage
