import React, { useEffect, useState } from "react"

const useIsWindowSmall = () => {
	const [isWindowSmall, setIsWindowSmall] = useState<boolean>(
		window.innerWidth <= 769
	)

	const handleResize = () => {
		setIsWindowSmall(window.innerWidth <= 768)
	}

	useEffect(() => {
		window.addEventListener("resize", handleResize)

		return () => removeEventListener("resize", handleResize)
	}, [isWindowSmall])

	return isWindowSmall
}

export default useIsWindowSmall
