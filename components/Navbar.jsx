import React from "react";

function Navbar() {
	return (
		<>
			<header className="text-black body-font bg-white">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<a href = "/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
						<img src="/logo.png" alt="" className="w-[150px] h-[40px] lg:w-[200px] lg:h-[80px] object-contain" />
					</a>
					<nav className="md:ml-auto flex flex-wrap items-center text-base lg:text-xl justify-center">
						<a href = "/" className="mr-5 hover:text-red-600 transition-all duration-200 font-semibold cursor-pointer">Home</a>
						<a href = "/" className="mr-5 hover:text-red-600 transition-all duration-200 font-semibold cursor-pointer">About</a>
						<a href = "/" className="mr-5 hover:text-red-600 transition-all duration-200 font-semibold cursor-pointer">Phones</a>
						<a href = "/" className="mr-5 hover:text-red-600 transition-all duration-200 font-semibold cursor-pointer">Tablets</a>
						<a href = "/" className="mr-5 hover:text-red-600 transition-all duration-200 font-semibold cursor-pointer">Computers</a>
						<a href = "/" className="mr-5 hover:text-red-600 transition-all duration-200 font-semibold cursor-pointer">Gaming</a>
						
					</nav>
					<button className="transition-all duration-200 inline-flex items-center bg-red-400 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 font-semibold rounded text-base text-white mt-4 md:mt-0">
						Login
						
					</button>
				</div>
			</header>
		</>
	);
}

export default Navbar;
