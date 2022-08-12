import { createClient } from "next-sanity";
import React from "react";
import Footer from "../components/Footer";

const About = ({ team }) => {
	const client = createClient({
		projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
		dataset: "production",
		apiVersion: "2021-10-21",
		useCdn: true,
	});
	console.log(team);
	return (
		<div>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-20">
						<h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
							OUR TEAM
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
							{
								"RedMaket an ecommerce site project made by Syed Adeeb and Mubashir Ali"
							}
						</p>
					</div>
					{team.map((item) => (
						<div className="flex flex-wrap -m-4" key={item._id}>
							<div className="p-4 lg:w-1/2 bg-gray-100 rounded-lg">
								<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
									<picture>
										<img
											alt="team"
											className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4"
											src={item.image}
										/>
									</picture>
									<div className="flex-grow sm:pl-8">
										<h2 className="title-font font-medium text-lg text-gray-900">
											{item.title}
										</h2>
										<h3 className="text-gray-500 mb-3">{item.feild}</h3>
										<p className="mb-4">{item.desc}</p>
										<span className="inline-flex">
											<a
												className="text-gray-500 cursor-pointer transition-all duration-200 hover:scale-125 hover:rotate-360"
												href={item.FbLink}
											>
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													className="w-5 h-5"
													viewBox="0 0 24 24"
												>
													<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
												</svg>
											</a>
											<a
												className="ml-2 text-gray-500 cursor-pointer transition-all duration-200 hover:scale-125 hover:rotate-360"
												href={item.TwitterLink}
											>
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													className="w-5 h-5"
													viewBox="0 0 24 24"
												>
													<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
												</svg>
											</a>
											<a
												className="ml-2 text-gray-500 cursor-pointer transition-all duration-200 hover:scale-125 hover:rotate-360"
												href={item.GithubLink}
											>
												<svg
													fill="gray"
													stroke="currenColor"
													width="20px"
													height="20px"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													// stroke="currentColor"
													className="text-gray-500"
													viewBox="0 0 32 32"
													// xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
												</svg>
											</a>
										</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
			<Footer></Footer>
		</div>
	);
};

export default About;

export async function getServerSideProps(context) {
	const client = createClient({
		projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
		dataset: "production",
		apiVersion: "2021-10-21",
		useCdn: false,
	});

	const query = `*[_type == 'Team']`;
	const team = await client.fetch(query);

	return {
		props: {
			team,
		},
	};
}
