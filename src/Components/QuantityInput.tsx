import React from "react"
import iconPlus from "../assets/images/icon-plus.svg"
import iconMinus from "../assets/images/icon-minus.svg"

const QuantityInput = () => {
	return (
		<div className="flex h-12 w-full items-center justify-between rounded-lg bg-lightGrayishBlue px-3 sm:w-2/5">
			<span>
				<img src={iconMinus}></img>
			</span>
			<span className="font-bold text-veryDarkBlue">0</span>
			<span>
				<img src={iconPlus}></img>
			</span>
		</div>
	)
}

export default QuantityInput
