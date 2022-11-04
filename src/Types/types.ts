import React from "react"

export type TCartItem = {
	productName: string
	quantity: number
	price: number
	totalProduct: number
}

export type TCartContext = {
	cart: TCartItem[]
	setCart: React.Dispatch<React.SetStateAction<TCartItem[]>>
}
