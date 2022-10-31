import React from "react"

export const onCLickNext = (
	indexActiveImage: number,
	numberOfImages: number,
	setIndexActiveImage: React.Dispatch<React.SetStateAction<number>>
) => {
	if (indexActiveImage + 1 === numberOfImages) {
		setIndexActiveImage(0)
		return
	}
	setIndexActiveImage((prev) => prev + 1)
}

export const onClickPrevious = (
	indexActiveImage: number,
	numberOfImages: number,
	setIndexActiveImage: React.Dispatch<React.SetStateAction<number>>
) => {
	console.log("ici")

	if (indexActiveImage === 0) {
		setIndexActiveImage(numberOfImages - 1)

		return
	}
	setIndexActiveImage((prev) => prev - 1)
}
