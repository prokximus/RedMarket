import React from "react";
import Link from "next/link";
import { GoThreeBars } from "react-icons/go";
import {
	CgProfile,
	CgClose
} from 'react-icons/cg';
import { useState } from "react";

function Navbar() {
	const [width, setwidth] = useState('w-0') // useState defines the initial width to zero for the hamburger
	const [visibility, setvisibility] = useState('overflow-x-hidden') // useState defines the initial visibility to show the menu only when clicked

	const openHam = () => {
		setwidth('w-[55%]') // setwidth to the desired width for the hamburger menu by button id #hambutton
		setTimeout(() => {
			setvisibility('overflow-x-visible') // this will make the close button visible
		}, 200);
	}
	const closeHam = () => {
		setwidth('w-0') // setwidth to 0 for the Hamburger menu by close button, it makes hamburger invisible when clicked
		setTimeout(() => {
			setvisibility('overflow-x-hidden') // this will make the hamburger invisible when not in use
		}, 200);
	}
	return (
		<>
			<header className="text-black body-font bg-red-300 ">
				<div className="container mx-auto flex flex-wrap pr-5 py-1 justify-between small:justify-start space-x-1 items-center">  {/* Justify Start for small devices so that the button and Logo are aligned at left */}
					{/* Below is the hamburger button*/}
					<div className="notSmall:hidden flex items-center">
						<button id="hambutton" onClick={openHam}>
							<GoThreeBars className="text-2xl" />
						</button>
					</div>
					{/* Logo Image in the flex box */}
					<Link href={"/"}>
						<a className="flex title-font font-medium items-center text-gray-900  md:mb-0">
							<picture>
								<img
									src="/logo.png"
									alt=""
									className="w-[150px] h-[40px] lg:w-[200px] lg:h-[80px] object-contain"
								/>
							</picture>
						</a>
					</Link>
					{/* The below div contains all the navigation links and login button */}
					<div className="flex space-x-2 items-center justify-end pr-10 md:pr-4 small:pr-0">
						<nav className="md:ml-auto flex flex-wrap items-center text-base lg:text-xl justify-center small:hidden space-x-4 mr-4">
							<Link href={"/"}>
								<a className="hover:text-red-600 hover:scale-110 transition-all duration-200 font-semibold cursor-pointer">
									Home
								</a>
							</Link>
							<Link href={"/about"}>
								<a className="hover:text-red-600 hover:scale-110 transition-all duration-200 font-semibold cursor-pointer">
									About
								</a>
							</Link>
							<Link href={"/phones"}>
								<a className="hover:text-red-600 hover:scale-110 transition-all duration-200 font-semibold cursor-pointer">
									Phones
								</a>
							</Link>
							<Link href={"/tablets"}>
								<a className="hover:text-red-600 hover:scale-110 transition-all duration-200 font-semibold cursor-pointer">
									Tablets
								</a>
							</Link>
							<Link href={"/computers"}>
								<a className="hover:text-red-600 hover:scale-110 transition-all duration-200 font-semibold cursor-pointer">
									Computers
								</a>
							</Link>
							<Link href={"/gaming"}>
								<a className="hover:text-red-600 hover:scale-110 transition-all duration-200 font-semibold cursor-pointer">
									Gaming
								</a>
							</Link>
						</nav>

						<button className="small:hidden transition-all duration-200 inline-flex items-center bg-red-400 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 font-semibold rounded-lg text-base text-white hover:scale-110 hover:rounded-xl">
							<Link href={'/login'}>Login</Link>
						</button>

					</div>
				</div>
			</header>

			{/* Hamburger Section which will appear on click */}
			<section className={`notSmall:hidden fixed h-full left-0 top-0 z-10 bg-white transition-all delay-200 ${width} ${visibility}`}>
				<div className="relative">
					<div className=" w-full bg-red-300 pb-2 px-2">
						<div className="">
							{/* Aligning sign in option this to the right */}
							<div className="absolute top-0 right-0 mr-2 flex space-x-1 items-center justify-end mt-2">
								<span>
									Sign In
								</span>
								<CgProfile className=" items-center" />
							</div>
						</div>
						<br />
						<h2 className="font-bold text-xl leading-5">
							Shop
						</h2>
						<h1 className="font-bold text-2xl">
							Red Market
						</h1>
					</div>
						
					{/* Your next content will go here do the top margin however you see fit */}
					<div>

					</div>
				</div>
				<div className="absolute text-xl top-6 -right-6">
					<button onClick={closeHam}>
							<CgClose/>
					</button>
						</div>
			</section>
		</>

	);
}

export default Navbar;
