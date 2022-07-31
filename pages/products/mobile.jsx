import { createClient } from "next-sanity";
import React from "react";
import Footer from "../../components/footer";
import { MdStar } from 'react-icons/md'


function Mobile({ product }) {
	const client = createClient({
		projectId: "e12bk888",
		dataset: "production",
		apiVersion: "2021-10-21",
		useCdn: true,
	});
	return (
		<div>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap gap-y-4 px-2 -m-4 justify-center">
						{product.map((item) => (
							<div className=" w-full md:w-1/2 lg:w-1/3" key={item._id}>
							<div className="w-[97%] bg-white rounded-lg shadow-md group p-4" >
								<a href={`/product/${item.slug.current}`}>
									<picture>
										<img className="lg:h-[320px] transition-all duration-200 h-[240px] py-4 mx-auto object-cover object-center group-hover:scale-110" src={item.img_url} alt="product image" loading='lazy' />
									</picture>
									<div className="px-5 pb-5">
										<h5 className="text-xl font-semibold tracking-tight text-gray-900">{item.title}</h5>
										<div className="flex items-center mt-2.5 mb-5">
											<div className='flex items-center text-yellow-500'>
												<MdStar />
												<MdStar />
												<MdStar />
												<MdStar />
												<MdStar />
											</div>
											<span className="bg-red-100 text-red-500 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">5.0</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="text-2xl font-bold text-gray-900">{Intl.NumberFormat(`hi-IN`, {
															currency: `INR`,
															style: "currency",
														})
															.format(item.defaultProductVariant.price)
															.replace(".00", "")}</span>
											<button className="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</button>
										</div>
									</div>
								</a>
							</div>
							</div>

							// <div className="p-4 w-full md:w-1/3" key={item._id}>
							// 	<div className="h-full border-2 border-gray-200 group transition-all duration-200 border-opacity-60 rounded-lg overflow-hidden">
							// 		<div>
							// 			<picture>
							// 				<img
							// 					className="lg:h-[320px] transition-all duration-200 h-[240px] py-4 mx-auto object-cover object-center hover:scale-105 delay-75"
							// 					src={item.img_url}
							// 					alt="Product"
							// 				/>
							// 			</picture>
							// 			<div className="p-6">
							// 				<h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
							// 					{/* {item.cate} */}
							// 				</h2>
							// 				<h1 className="title-font truncate text-lg font-medium text-gray-900 mb-3">
							// 					{item.title}
							// 				</h1>
							// 				<p className="leading-relaxed truncate mb-3">
							// 					{item.meta_desc}
							// 				</p>
							// 				<div className="flex items-center flex-wrap ">
							// 					<a
							// 						key={item.slug}
							// 						href={`/product/` + item.slug.current}
							// 						className="bg-red-400 hidden group-hover:bg-red-500 px-2 py-1 rounded-lg text-white cursor-pointer hover:scale-110 transition-all duration-200 lg:inline-flex items-center md:mb-2 lg:mb-0"
							// 					>
							// 						View Product
							// 						<svg
							// 							className="w-4 h-4 ml-2"
							// 							viewBox="0 0 24 24"
							// 							stroke="currentColor"
							// 							strokeWidth="2"
							// 							fill="none"
							// 							strokeLinecap="round"
							// 							strokeLinejoin="round"
							// 						>
							// 							<path d="M5 12h14"></path>
							// 							<path d="M12 5l7 7-7 7"></path>
							// 						</svg>
							// 					</a>
							// 					<div className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto text-sm md:ml-0 ml-auto leading-none pr-3 py-1 space-x-4 ">
							// 						<span className="">
							// 							<span>{"price: "}</span>
							// 							{Intl.NumberFormat(`hi-IN`, {
							// 								currency: `INR`,
							// 								style: "currency",
							// 							})
							// 								.format(item.defaultProductVariant.price)
							// 								.replace(".00", "")}
							// 						</span>
							// 						<a className="lg:hidden whitespace-nowrap bg-red-400 text-white px-2 py-1 text-sm rounded-lg">
							// 							View Product
							// 						</a>
							// 					</div>
							// 				</div>
							// 			</div>
							// 		</div>
							// 	</div>
							// </div>
						))}
					</div>
				</div>
			</section>
			<Footer></Footer>
		</div>
	);
}

export default Mobile;

export async function getServerSideProps(context) {
	const client = createClient({
		projectId: "e12bk888",
		dataset: "production",
		apiVersion: "2021-10-21",
		useCdn: false,
	});

	const query = `*[_type == 'product' && cate == 'Mobile']`;
	const product = await client.fetch(query);

	return {
		props: {
			product,
		},
	};
}
