import React from "react";

const Cart = ({ Cart, subTotal, removeFromCart, clearCart }) => {
	// Change the subTotal value to rupees
	const subtotal = new Intl.NumberFormat(`hi-IN`, {
		currency: `INR`,
		style: "currency",
	}).format(subTotal);

	return (
		<>
			<section className="text-gray-600 body-font overflow-hidden">
				<div className="container px-5 py-24 mx-auto">
					{Cart && (
						<div className="-my-8 divide-y-2 divide-gray-100">
							{Object.keys(Cart).map((item) => {
								let mapCart = Cart[item];
								let slug = item;
								const price = mapCart.price;

								// Change the pirce to the rupees
								const rupees = new Intl.NumberFormat(`hi-IN`, {
									currency: `INR`,
									style: "currency",
								}).format(price);

								// Change the total pirce to the rupees
								const total = new Intl.NumberFormat(`hi-IN`, {
									currency: `INR`,
									style: "currency",
								}).format(price * mapCart.qty);

								return (
									<div key={item} className="py-8 flex flex-col sm:flex-row">
										<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
											<picture className="flex justify-center">
												<img
													src={mapCart.img_url}
													className="md:w-full h-full mx-auto"
													alt={mapCart.title}
												/>
											</picture>
										</div>
										<div className="md:flex-grow my-auto mx-4">
											<h2 className="text-2xl text-center sm:text-left font-medium text-gray-900 title-font mb-2">
												{mapCart.title}
											</h2>
											<p className="text-center sm:text-left">
												{rupees} x {mapCart.qty}
												{" = "}
												{total}
											</p>
											<a className="text-red-500 flex justify-center sm:justify-start items-center mt-4">
												<button
													onClick={(e) => {
														e.preventDefault;
														removeFromCart(slug);
													}}
												>
													<p className="text-center sm:text-left">Remove</p>
												</button>
												<svg
													className="w-4 h-4 ml-2"
													viewBox="0 0 24 24"
													stroke="currentColor"
													strokeWidth="2"
													fill="none"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path d="M5 12h14"></path>
													<path d="M12 5l7 7-7 7"></path>
												</svg>
											</a>
										</div>
									</div>
								);
							})}

							<div className="flex justify-between">
								<h4>Subotal: </h4>
								{subtotal}
							</div>
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default Cart;
