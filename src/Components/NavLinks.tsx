import React from "react"
import NavLink from "./NavLink"
import clsx from "clsx"

const NavLinks = ({ isMobileMenu }: { isMobileMenu?: boolean }) => {
	const navLinks = [
		{ label: "Collections", path: "/" },
		{ label: "Men", path: "/" },
		{ label: "Women", path: "/" },
		{ label: "About", path: "/" },
		{ label: "Contact", path: "/" },
	]
	return (
		<ul
			className={clsx(
				isMobileMenu && "space-y-3 font-bold text-veryDarkBlue",
				!isMobileMenu &&
					"relative hidden space-x-7 pl-2 font-normal text-darkGrayishBlue md:flex"
			)}>
			{navLinks.map((navLink, index) => (
				<NavLink key={index} label={navLink.label} path={navLink.path} />
			))}
		</ul>
	)
}

export default NavLinks
