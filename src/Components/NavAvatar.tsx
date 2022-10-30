import React from "react"
import imageAvatar from "../assets/images/image-avatar.png"

const NavAvatar = () => {
	return (
		<a
			href="/"
			className=" transition-color transform rounded-full duration-100 hover:outline hover:outline-orange">
			<img src={imageAvatar} alt="cart icon" className="h-6 md:h-12"></img>
		</a>
	)
}

export default NavAvatar
