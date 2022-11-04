import React from "react"
import ButtonControlCarousel from "./ButtonControlCarousel"
import IconNext from "../assets/images/icon-next.svg"
import IconPrev from "../assets/images/icon-previous.svg"
import useIsWindowSmall from "../Hooks/useIsWindowSmall"

const CarouselControl = ({
	showPreviousImage,
	showNextImage,
	isInsideLightBox,
}: {
	showNextImage: () => void
	showPreviousImage: () => void
	isInsideLightBox: boolean
}) => {
	const isWindowSmall = useIsWindowSmall()

	return (
		<>
			{isInsideLightBox || isWindowSmall ? (
				<div className="absolute bottom-1/2 flex w-full justify-between px-4">
					<ButtonControlCarousel handleClick={showPreviousImage} icon={IconPrev} />
					<ButtonControlCarousel handleClick={showNextImage} icon={IconNext} />
				</div>
			) : null}
		</>
	)
}

export default CarouselControl
