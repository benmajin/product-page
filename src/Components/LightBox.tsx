import React from "react"
import IconClose from "../assets/images/icon-close.svg"

import ProductImage from "./ProductImage"
const LightBox = ({
	setIsModalShowing,
	showPreviousImage,
	showNextImage,
}: {
	setIsModalShowing: React.Dispatch<React.SetStateAction<boolean>>
	showNextImage: () => void
	showPreviousImage: () => void
}) => {
	return (
		<div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-black/70">
			<div className="flex flex-col items-end">
				<img src={IconClose} className="h-6 w-5 cursor-pointer text-orange" />
				<div className="max-w-xl">
					<ProductImage isInsideLightBox={true} />
				</div>
			</div>
		</div>
	)
}

export default LightBox
