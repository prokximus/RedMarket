import React from "react";

function Exclusive({ exclusive }) {
	return (
		<div>
			<section className="text-gray-900 body-font bg-gradient">
				<h1 className="text-center pt-4  text-4xl font-bold uppercase">
					Exclusive products Only on Red Market!
				</h1>
				{exclusive.map((item) => (
					<div
						key={item._id}
						className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
					>
						<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 ml-10 md:mb-0">
							<a href={`/exclusive/` + item.slug.current}>
								<picture>
									<img
										className="object-cover object-center rounded lg:h-[400px] lg:w-[450px] hover:scale-105 transition-all delay-75"
										alt="hero"
										src={`${item.img_url}`}
									/>
								</picture>
							</a>
						</div>
						<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
							<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
								{item.title}
							</h1>
							<p className="mb-8 leading-relaxed text-xl">
								{item.meta_desc.slice(0, 100)}...
							</p>
							<div className="flex justify-center">
								<button className="inline-flex items-center text-white hover:scale-110 transition-all duration-200 border-0 py-2 px-6 focus:outline-none bg-red-400 hover:bg-red-500 rounded-xl text-lg">
									<a
										href={`/exclusive/` + item.slug.current} // // Add an seperate Exclusive Folder Including Slug page
									>
										View Product{" "}
									</a>
									<svg
										className="w-6 h-6 ml-2"
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
								</button>
							</div>
						</div>
					</div>
				))}
			</section>
		</div>
	);
}

export default Exclusive;
