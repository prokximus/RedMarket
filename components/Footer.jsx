import Link from "next/link";
import React from "react";

function Footer() {
	const Profile = {
		instaLink: "https://www.instagram.com/prokximus",
		fbLink: "https://www.facebook.com/s.a.abidi.9/",
		githubLink: "https://github.com/prokximus",
		twitterLink: "https://twitter.com/prokximus",
	};
	return (
		<div>
			<footer className=" text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
					<div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
						<a className="flex title-font font-medium items-center md:justify-start justify-between text-gray-900">
							<picture className="mx-auto md:mx-0">
								<img src="/logo.png" className="w-[150px] x h-[40px]" alt="" />
							</picture>
						</a>
						<p className="mt-2 text-sm text-gray-500">
							RedMaket an ecommerce site project made with Next JS framework
						</p>
					</div>
					<div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left justify-between text-center">
						<div className="lg:w-1/4 md:w-1/2 w-full px-4">
							<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">
								Quick Links
							</h2>
							<nav className="list-none mb-10">
								<li>
									<Link className="text-gray-600 hover:text-gray-800 cursor-pointer" href="/products/mobile">
										Phones
									</Link>
								</li>
								<li>
									<Link className="text-gray-600 hover:text-gray-800 cursor-pointer" href="/products/tablets">
										Tablets
									</Link>
								</li>
								<li>
									<Link className="text-gray-600 hover:text-gray-800 cursor-pointer" href="/products/computer">
										Computers
									</Link>
								</li>
								<li>
									<Link className="text-gray-600 hover:text-gray-800 cursor-pointer" href="/products/gaming">
										Gaming
									</Link>
								</li>
							</nav>
						</div>
						<div className="lg:w-1/4 md:w-1/2 w-full px-4">
							<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">
								Terms & Policy
							</h2>
							<nav className="list-none mb-10">
								<li>
									<Link className="text-gray-600 hover:text-gray-800 cursor-pointer" href="/terms">
										Terms
									</Link>
								</li>
								<li>
									<Link className="text-gray-600 hover:text-gray-800 cursor-pointer" href="/privacypolicy">
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link className="text-gray-600 hover:text-gray-800 cursor-pointer" href="/return-policy">
										Return Policy
									</Link>
								</li>
							</nav>
						</div>

						<div className="lg:w-1/4 md:w-1/2 w-full px-4">
							<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">
								Follow us on
							</h2>
							<nav className="list-none mb-10">
								<li>
									<a
										href={Profile.fbLink}
										className="text-gray-600 hover:text-gray-800 cursor-pointer"
									>
										Facebook
									</a>
								</li>
								<li>
									<a
										href={Profile.githubLink}
										className="text-gray-600 hover:text-gray-800 cursor-pointer"
									>
										Github
									</a>
								</li>
								<li>
									<a
										href={Profile.instaLink}
										className="text-gray-600 hover:text-gray-800 cursor-pointer"
									>
										Instagram
									</a>
								</li>
								<li>
									<a
										href={Profile.twitterLink}
										className="text-gray-600 hover:text-gray-800 cursor-pointer"
									>
										Twitter
									</a>
								</li>
							</nav>
						</div>
					</div>
				</div>
				<div className="bg-gray-100">
					<div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
						<p className="text-gray-500 text-sm text-center sm:text-left">
							© 2022 Red Market —
							<a
								href={Profile.githubLink}
								rel="noopener noreferrer"
								className="text-gray-600 ml-1"
								target="_blank"
							>
								All Rights Reserved
							</a>
						</p>
						<span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
							<a className=" transition-all duration-200 hover:scale-125 hover:rotate-360 cursor-pointer" href={Profile.fbLink}>
								<svg
									fill=""
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
								</svg>
							</a>
							<a className="ml-3  transition-all duration-200 hover:scale-125 hover:rotate-360 cursor-pointer" href={Profile.twitterLink}>
								<svg
									fill=""
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
								</svg>
							</a>

							<a className="ml-3 text-gray-500 transition-all duration-200 hover:scale-125 hover:rotate-360 cursor-pointer" href={Profile.githubLink}>
								<svg
									fill="currenColor"
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
							<a className="ml-3  transition-all duration-200 hover:scale-125 hover:rotate-360 cursor-pointer" href={Profile.instaLink}>
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
								</svg>
							</a>
						</span>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
