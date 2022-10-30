import React from "react"
import iconMenu from "../assets/images/icon-menu.svg"

const BurgerIcon = ({
	setIsMenuOpen,
}: {
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
	return (
		<img
			src={iconMenu}
			alt="menu icon"
			className="mt-1 block cursor-pointer md:hidden"
			onClick={() => setIsMenuOpen((prev) => !prev)}
		/>
	)
}

export default BurgerIcon
