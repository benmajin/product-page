import React from "react"

const QuantityInput = ({
	setQuantity,
	quantity,
}: {
	setQuantity: React.Dispatch<React.SetStateAction<number>>
	quantity: number
}) => {
	const decreaseQuantity = () => {
		if (quantity === 0) {
			setQuantity(0)
			return
		}

		setQuantity((prev) => prev - 1)
	}

	const increaseQuantity = () => {
		setQuantity((prev) => prev + 1)
	}
	return (
		<div className="flex h-12 w-full items-center justify-between rounded-lg bg-lightGrayishBlue px-3 sm:w-2/5">
			<button type="button">
				<svg
					onClick={decreaseQuantity}
					width="12"
					height="4"
					className="cursor-pointer  text-orange hover:text-orange/60"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink">
					<defs>
						<path
							d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
							id="a"
						/>
					</defs>
					<use fill="currentColor" fillRule="nonzero" xlinkHref="#a" />
				</svg>
			</button>

			<span className="font-bold text-veryDarkBlue">{quantity}</span>
			<button type="button">
				<svg
					onClick={increaseQuantity}
					width="12"
					height="12"
					className="cursor-pointer  text-orange hover:text-orange/60"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink">
					<defs>
						<path
							d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
							id="b"
						/>
					</defs>
					<use fill="currentColor" fillRule="nonzero" xlinkHref="#b" />
				</svg>
			</button>
		</div>
	)
}

export default QuantityInput
