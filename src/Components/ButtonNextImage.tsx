import React from "react"
import IconNext from "../assets/images/icon-next.svg"

const ButtonNextImage = ({ onClickNext }: { onClickNext: () => void }) => {
	return (
		<button
			onClick={() => onClickNext}
			className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white ">
			<img src={IconNext} className="h-4 object-cover"></img>
		</button>
	)
}

export default ButtonNextImage
