import React, { SyntheticEvent, useEffect, useRef, useState } from "react"
import iconMenu from "../assets/images/icon-menu.svg"
import logo from "../assets/images/logo.svg"
import clsx from "clsx"
import MobileMenu from "./MobileMenu"
import NavLinks from "./NavLinks"
import CartIcon from "./CartIcon"
import NavAvatar from "./NavAvatar"
import BurgerIcon from "./BurgerIcon"
import Brand from "./Brand"

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

	return (
		<nav className="relative">
			<div className="mx-auto flex w-screen items-center justify-between border-b-darkGrayishBlue p-6 md:max-w-screen-xl md:border-b">
				<div className="flex items-center space-x-4">
					<BurgerIcon setIsMenuOpen={setIsMenuOpen} />
					<Brand />
					<NavLinks />
				</div>

				<div className="flex items-center space-x-5 md:space-x-10">
					<CartIcon />
					<NavAvatar />
				</div>

				<MobileMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
			</div>
		</nav>
	)
}

export default NavBar
