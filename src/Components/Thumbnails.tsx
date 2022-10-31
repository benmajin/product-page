import clsx from "clsx"
import React from "react"
import thumbnailImage1 from "../assets/images/image-product-1-thumbnail.jpg"
import thumbnailImage2 from "../assets/images/image-product-2-thumbnail.jpg"
import thumbnailImage3 from "../assets/images/image-product-3-thumbnail.jpg"
import thumbnailImage4 from "../assets/images/image-product-4-thumbnail.jpg"

const Thumbnails = ({
	selectImageFromThumbnail,
	indexActiveImage,
}: {
	selectImageFromThumbnail: (index: number) => void
	indexActiveImage: number
}) => {
	const thumbnailsImage = [
		thumbnailImage1,
		thumbnailImage2,
		thumbnailImage3,
		thumbnailImage4,
	]
	return (
		<div className={clsx("flex space-x-8")}>
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
	)
}

export default Thumbnails
