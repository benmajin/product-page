import React, { ReactNode } from "react"

function DiscountBadge({ children }: { children: ReactNode }) {
	return (
		<span className="rounded-lg bg-paleOrange px-3 text-lg font-bold text-orange">
			{children}
		</span>
	)
}

export default DiscountBadge
