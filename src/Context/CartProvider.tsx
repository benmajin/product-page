import React, { createContext, ReactNode, useState } from "react"
import { TCartContext, TCartItem } from "../Types/types"
export const CartContext = createContext<TCartContext>({
	cart: [],
	setCart: () => {},
})

const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cart, setCart] = useState<TCartItem[]>([])
	return (
		<CartContext.Provider value={{ cart, setCart }}>
			{children}
		</CartContext.Provider>
	)
}

export default CartProvider
