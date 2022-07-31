/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

function Recent({ product }) {
	return (
		<div>
			<section className="text-gray-600 body-font ">
				<div className="container px-5 py-24 mx-auto">
					<h1 className="text-4xl text-gray-600 rounded-ful text-center font-bold uppercase">
						Recent Products
					</h1>
					<br />
					<br />
					<div className="flex flex-wrap -m-4">
						{product.map((item) => (
							<div className="p-4 w-full md:w-1/3" key={item._id}>
								<div className="h-full border-2 border-gray-200 group transition-all duration-200 border-opacity-60 rounded-lg overflow-hidden">
									<div>
										<picture>
											<img
												className="lg:h-[320px] transition-all duration-200 h-[240px] py-4 mx-auto object-cover object-center group-hover:scale-105 delay-75"
												src={item.img_url}
												alt="Product"
											/>
										</picture>
										<div className="p-6">
											<h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
												{/* {item.cate} */}
											</h2>
											<h1 className="title-font truncate text-lg font-medium text-gray-900 mb-3">
												{item.title}
											</h1>
											<p className="leading-relaxed truncate mb-3">
												{item.meta_desc}
											</p>
											<div className="flex items-center flex-wrap ">
												<a
													href={`/product/` + item.slug.current}
													className="bg-red-400 hidden group-hover:bg-red-500 px-2 py-1 rounded-lg text-white cursor-pointer hover:scale-110 transition-all duration-200 lg:inline-flex items-center md:mb-2 lg:mb-0"
												>
													View Product
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
												<div className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto text-sm md:ml-0 ml-auto leading-none pr-3 py-1 space-x-4 ">
													<span className="">
														<span>{"price: "}</span>
														{Intl.NumberFormat(`hi-IN`, {
															currency: `INR`,
															style: "currency",
														})
															.format(item.defaultProductVariant.price)
															.replace(".00", "")}
													</span>
													<a className="lg:hidden whitespace-nowrap bg-red-400 text-white px-2 py-1 text-sm rounded-lg">
														View Product
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Recent;
