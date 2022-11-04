import React from "react"

const ButtonControlCarousel = ({
	handleClick,
	icon,
}: {
	handleClick: () => void
	icon: string
}) => {
	return (
		<button
			onClick={handleClick}
			className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white">
			<img src={icon} className="h-4 object-cover"></img>
		</button>
	)
}

export default ButtonControlCarousel
