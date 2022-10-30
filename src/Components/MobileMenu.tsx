import clsx from "clsx"
import React, { useState } from "react"
import iconClose from "../assets/images/icon-close.svg"
import NavLink from "./NavLink"
import NavLinks from "./NavLinks"

const MobileMenu = ({
	setIsMenuOpen,
	isMenuOpen,
}: {
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
	isMenuOpen: boolean
}) => {
	return (
		<div
			className={clsx(
				"absolute top-0 -left-2/3 h-screen w-2/3 transform shadow-2xl duration-300 md:hidden",
				isMenuOpen && "translate-x-full "
			)}>
			<div className="w-full space-y-9 bg-white p-6 ">
				<img
					src={iconClose}
					alt="icon close menu"
					className="cursor-pointer"
					onClick={() => setIsMenuOpen(false)}
				/>
				<NavLinks isMobileMenu />
			</div>
		</div>
	)
}

export default MobileMenu
