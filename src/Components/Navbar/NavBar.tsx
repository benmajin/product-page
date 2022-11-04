import React, { useState } from "react"
import MobileMenu from "../ui/nav/MobileMenu"
import NavLinks from "../ui/nav/NavLinks"
import CartIcon from "../ui/nav/CartIcon"
import NavAvatar from "../ui/nav/NavAvatar"
import BurgerIcon from "../ui/nav/BurgerIcon"
import Brand from "../ui/nav/Brand"
import CartDropdown from "../ui/cart/CartDropdown"

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
