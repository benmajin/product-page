import React from "react"
import NavBar from "./Components/NavBar"
import Product from "./Components/Product"
import CartProvider from "./Context/CartProvider"

const App = () => (
	<>
		<CartProvider>
			<NavBar />
			<Product />
		</CartProvider>
	</>
)

export default App
