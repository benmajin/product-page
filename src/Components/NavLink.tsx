import React from "react"

const NavLink = ({ label, path }: { label: string; path: string }) => {
	return (
		<li className="relative transform text-lg transition-all duration-1000 hover:text-veryDarkBlue ">
			<a
				href={path}
				className="after:-bottom-9 after:right-0 after:left-0 after:h-1 after:bg-orange md:hover:after:absolute">
				{label}
			</a>
		</li>
	)
}

export default NavLink
