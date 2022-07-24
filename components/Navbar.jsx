import React from "react";
import Link from 'next/link'
import {
	GoThreeBars
} from 'react-icons/go'


function Navbar() {
	return (
		<>
			<header className="text-black body-font bg-white">
				<div className="container mx-auto flex flex-wrap p-5 justify-between items-center">
					<Link href={'/'}><a className="flex title-font font-medium items-center text-gray-900  md:mb-0">
						<picture>
							<img src="/logo.png" alt="" className="w-[150px] h-[40px] lg:w-[200px] lg:h-[80px] object-contain" />
						</picture>
					</a></Link>
					<div className="flex space-x-2 justify-end items-center pr-10 md:pr-4 small:pr-0">

						<nav className="md:ml-auto flex flex-wrap items-center text-base lg:text-xl justify-center small:hidden space-x-4 mr-4">

							<Link href={'/'}><a className="hover:text-red-600 transition-all duration-200 font-semibold cursor-pointer">Home</a></Link>
							<Link href={'/'}><a className="hover:text-red-600 transition-all duration-200 font-semibold cursor-pointer">About</a></Link>
							<Link href={'/'}><a className="hover:text-red-600 transition-all duration-200 font-semibold cursor-pointer">Phones</a></Link>
							<Link href={'/'}><a className="hover:text-red-600 transition-all duration-200 font-semibold cursor-pointer">Tablets</a></Link>
							<Link href={'/'}><a className="hover:text-red-600 transition-all duration-200 font-semibold cursor-pointer">Computers</a></Link>
							<Link href={'/'}><a className="hover:text-red-600 transition-all duration-200 font-semibold cursor-pointer">Gaming</a></Link>

						</nav>


						<button className="transition-all duration-200 inline-flex items-center bg-red-400 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 font-semibold rounded text-base text-white">
							Login

						</button>
						<div className="notSmall:hidden flex items-center">
							<button>
								<GoThreeBars className="text-2xl" />
							</button>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Navbar;
