import { createClient } from "next-sanity";
import React from "react";
import Footer from "../../components/Footer";
import { MdStar } from "react-icons/md";

function tablet({ product }) {
	const client = createClient({
		projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
		dataset: "production",
		apiVersion: "2021-10-21",
		useCdn: true,
	});
	return (
		<div>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap -m-4">
						{product.map((item) => (
							<div
								className="w-full md:w-1/3 bg-white rounded-lg shadow-md group p-4"
								key={item._id}
							>
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
										<h5 className="text-xl font-semibold tracking-tight text-gray-900">
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
						))}
					</div>
				</div>
			</section>
			<Footer></Footer>
		</div>
	);
}

export default tablet;

export async function getServerSideProps(context) {
	const client = createClient({
		projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
		dataset: "production",
		apiVersion: "2021-10-21",
		useCdn: false,
	});

	const query = `*[_type == 'product' && cate == 'Tablet']`;
	const product = await client.fetch(query);

	return {
		props: {
			product,
		},
	};
}
