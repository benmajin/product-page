import React from "react"
import NavBar from "./Components/Navbar/NavBar"
import Product from "./Components/Product/Product"
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
