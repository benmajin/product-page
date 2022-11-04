import React, { useState } from "react"
import MobileMenu from "./MobileMenu"
import NavLinks from "./NavLinks"
import CartIcon from "./CartIcon"
import NavAvatar from "./NavAvatar"
import BurgerIcon from "./BurgerIcon"
import Brand from "./Brand"
import CartDropdown from "./CartDropdown"

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false)

	return (
		<nav className="relative">
			<div className="relative mx-auto flex w-screen items-center justify-between border-b-darkGrayishBlue p-6 md:max-w-screen-xl md:border-b">
				<div className="flex items-center space-x-4">
					<BurgerIcon setIsMenuOpen={setIsMenuOpen} />
					<Brand />
					<NavLinks />
				</div>

				<div className=" flex items-center space-x-5 md:space-x-10">
					<CartIcon setIsCartDropdownOpen={setIsCartDropdownOpen} />
					<NavAvatar />
				</div>

				{isCartDropdownOpen ? <CartDropdown /> : null}

				<MobileMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
			</div>
		</nav>
	)
}

export default NavBar
