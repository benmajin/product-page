import React from "react"

const NavLink = ({ label, path }: { label: string; path: string }) => {
	return (
		<li className="relative text-lg hover:text-veryDarkBlue ">
			<a
				href={path}
				className="after:-bottom-9 after:left-0 after:h-1 after:bg-orange hover:after:w-full md:after:absolute">
				{label}
			</a>
		</li>
	)
}

export default NavLink
