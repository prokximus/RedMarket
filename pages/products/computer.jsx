import React from 'react'
import {MdStar} from 'react-icons/md'
import { createClient } from "next-sanity";
import { useState } from 'react';

function Computer({product}) {
  const client = createClient({
		projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
		dataset: "production",
		apiVersion: "2021-10-21",
		useCdn: true,
	});

	const [index, setindex] = useState(3);

	let slicedProduct = product.slice(0, index);
	// const [state, setState] = useState({
	// 	items: Array.from({ length: index }),
	// 	hasMore: true
	// })
	const [items, setitems] = useState(Array.from({ length: 3 }));

	const [hasMore, sethasMore] = useState(true);

	const fetchMoreData = () => {
		if (items.length === product.length) {
			sethasMore(false);
			return;
		} else if (items.length <= product.length) {
			setindex(index + 3);
		}
		// 20 more records in .5 secs
		setTimeout(() => {
			// setState({
			// 	items: items.concat(Array.from({ length: 3 })),
			// 	hasMore:true
			// });
			if (items.length <= product.length) {
				setitems(items.concat(Array.from({ length: 3 })));
			}
		}, 500);
	};
	return (
		<div>
			
				<section className="text-gray-600 body-font">
					<div className="container px-5 py-24 mx-auto">
						<div className="flex flex-wrap gap-y-4 px-2 -m-4 justify-center">
							{items.map((i, index) => {})}
							{slicedProduct.map((item) => (
								<div className=" w-full md:w-1/2 lg:w-1/3" key={item._id}>
									<div className="w-[97%] bg-white rounded-lg shadow-md group p-4">
										<a href={`/product/${item.slug.current}`}>
											<picture>
												<img
													className="lg:h-[320px] transition-all duration-200 h-[240px] py-4 mx-auto object-cover object-center group-hover:scale-110"
													src={item.img_url}
													alt="product image"
													loading="lazy"
												/>
											</picture>
											<div className="px-5 pb-5">
												<h5 className="text-xl font-semibold tracking-tight truncate text-gray-900">
													{item.title}
												</h5>
												<div className="flex items-center mt-2.5 mb-5">
													<div className="flex items-center text-yellow-500">
														<MdStar />
														<MdStar />
														<MdStar />
														<MdStar />
														<MdStar />
													</div>
													<span className="bg-red-100 text-red-500 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">
														5.0
													</span>
												</div>
												<div className="flex justify-between items-center">
													<span className="text-2xl font-bold text-gray-900">
														{Intl.NumberFormat(`hi-IN`, {
															currency: `INR`,
															style: "currency",
														})
															.format(item.defaultProductVariant.price)
															.replace(".00", "")}
													</span>
													<button className="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
														Add to cart
													</button>
												</div>
											</div>
										</a>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
		</div>
	);
}

export default Computer;

export async function getServerSideProps(context) {
	const client = createClient({
		projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
		dataset: "production",
		apiVersion: "2021-10-21",
		useCdn: false,
	});

	const query = `*[_type == 'product' && cate == 'Computer']`;
	const product = await client.fetch(query);

	return {
		props: {
			product,
		},
	};
}