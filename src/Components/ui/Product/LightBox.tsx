import React from "react"

import ProductImage from "../../Product/ProductImage"
const LightBox = ({
	setIsModalShowing,
}: {
	setIsModalShowing: React.Dispatch<React.SetStateAction<boolean>>
}) => {
	return (
		<div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-black/70">
			<div className="flex max-w-2xl flex-col items-end ">
				<svg
					width="17"
					height="18"
					xmlns="http://www.w3.org/2000/svg"
					className="mb-4"
					onClick={() => setIsModalShowing(false)}>
					<path
						className="cursor-pointer text-white hover:text-orange"
						d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
						fill="currentColor"
						fillRule="evenodd"
					/>
				</svg>
				<ProductImage isInsideLightBox={true} />
			</div>
		</div>
	)
}

export default LightBox
