import React from "react"
import { images } from "../utils/images"

const ActiveImage = ({
	handleLightBoxOpening,
	indexActiveImage,
}: {
	handleLightBoxOpening: () => void
	indexActiveImage: number
}) => {
	return (
		<img
			src={images[indexActiveImage]}
			className="w-full cursor-pointer object-cover md:rounded-2xl"
			onClick={handleLightBoxOpening}
		/>
	)
}

export default ActiveImage
