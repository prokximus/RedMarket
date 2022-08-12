/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { MdStar } from "react-icons/md";
import { createClient } from "next-sanity";
import { useState } from "react";
import Pagination from "next-pagination";
import "next-pagination/dist/index.css";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";

function Computer({ product }) {
	const client = createClient({
		projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
		dataset: "production",
		apiVersion: "2021-10-21",
		useCdn: true,
	});
	let Router = useRouter();

	let pagecount = Math.ceil(product.length / 9);
	let currentPage = Number(Router.query.page);
	let totalpages = pagecount;
	let totalpagesArray = [];
	for (let index = 1; index <= totalpages; index++) {
		const element = index;
		totalpagesArray.push(element);
	}

	let array = product.length / 9;
	for (let index = 0; index < product.length; index++) {
		const slicedArray = array;
	}
	let startArray = Math.floor(Router.query.page - 1) * 9;
	console.log(Router.query.page);
	if (Router.query.page == undefined) {
		startArray = 0;
		currentPage = 1;
	}
	console.log("start array" + startArray);
	let maxArray = startArray + 9;

	if (maxArray > product.length) {
		maxArray = product.length;
	}

	let Product = product.slice(startArray, startArray + 9);
	return (
		<div>
			<section className="text-gray-600 body-font">
				<div className="container px-5 pt-24 mx-auto">
					<div className="flex flex-wrap gap-y-4 px-2 -m-4 justify-center">
						{Product.map((item) => (
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
			<nav
				aria-label="Page navigation example"
				className="flex w-full justify-center "
			>
				<ul className="inline-flex items-center justify-between space-x-2 mt-8 my-auto ">
					<li>
						<a
							href={`?page=${currentPage - 1}`}
							className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
						>
							<span className="sr-only">Previous</span>
							<svg
								aria-hidden="true"
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
									clipRule="evenodd"
								></path>
							</svg>
						</a>
					</li>
					{totalpagesArray.map((item) => {
						if(item !== currentPage) {
						return (
							<li id={`list${item}`} key={`hello?${item}`} className="py-10">
								<a
									href={`?page=${item}`}
									className="py-2 px-3 leading-tight text-gray-500 bg-white  border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
								>
									{item}
								</a>
							</li>
						);}
						else {
							return (
								<li id={`list${item}`} key={`hello?${item}`} className="py-10">
									<a
										href={`?page=${item}`}
										className="py-2 px-3 leading-tight text-white bg-black border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
									>
										{item}
									</a>
								</li>
							);
						}
					})}
					<li>
						<a
							href={`?page=${currentPage + 1}`}
							className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
						>
							<span className="sr-only">Next</span>
							<svg
								aria-hidden="true"
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clipRule="evenodd"
								></path>
							</svg>
						</a>
					</li>
				</ul>
			</nav>
			<Footer></Footer>
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

	const query = `*[_type == 'product' && cate == 'Mobile']`;
	const product = await client.fetch(query);

	return {
		props: {
			product,
		},
	};
}
