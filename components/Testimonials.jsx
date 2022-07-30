import React from "react";

function Testimonials({ testimonails }) {
	return (
		<div>
			<section className="text-gray-600 body-font">
				<h2 className="text-center pt-4  text-4xl font-bold uppercase">
					What people says about us
				</h2>
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap -m-4">
						{testimonails.map((item) => (
							<div className="lg:w-1/3 px-4 lg:mb-0 mb-6" key={item._id}>
								<div className="h-full bg-gray-100 rounded-lg py-4  text-center">
									<picture>
										<img
											alt="testimonial"
											className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
											src={item.img_url}
										/>
									</picture>
									<p className="leading-relaxed px-4">
										{item.meta_desc.slice(0, 200)}
										{item.meta_desc.length >= 200 && "..."}
									</p>
									<span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
									<h2 className="text-gray-900 font-semibold title-font tracking-wider text-lg">
										{item.title}
									</h2>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Testimonials;
