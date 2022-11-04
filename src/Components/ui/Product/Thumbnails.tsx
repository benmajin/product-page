import clsx from "clsx"
import React from "react"
import { thumbnailsImage } from "../../../utils/images"

const Thumbnails = ({
	selectImageFromThumbnail,
	indexActiveImage,
	isInsideLightBox,
}: {
	selectImageFromThumbnail: (index: number) => void
	indexActiveImage: number
	isInsideLightBox: boolean
}) => {
	return (
		<div
			className={clsx(
				" hidden space-x-8 md:flex",
				isInsideLightBox ? "px-8" : "px-0"
			)}>
			{thumbnailsImage.map((thumbnail, index) => (
				<button
					className="group relative mt-6 cursor-pointer overflow-hidden outline-none"
					key={index}
					onClick={() => selectImageFromThumbnail(index)}>
					<img src={thumbnail} className=" rounded-xl"></img>
					<span
						className={clsx(
							"absolute inset-0 rounded-xl  hover:bg-lightGrayishBlue/70 group-focus:border-2 group-focus:border-orange group-focus:bg-lightGrayishBlue/70 ",
							indexActiveImage === index
								? "border-2 border-orange bg-lightGrayishBlue/70"
								: ""
						)}
					/>
				</button>
			))}
		</div>
	)
}

export default Thumbnails
