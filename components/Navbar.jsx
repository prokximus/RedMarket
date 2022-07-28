/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { GoThreeBars } from "react-icons/go";
import { CgProfile, CgClose } from "react-icons/cg";
import { useState } from "react";

function Navbar() {
	const [width, setwidth] = useState("w-0"); // useState defines the initial width to zero for the hamburger
	const [visibility, setvisibility] = useState("overflow-x-hidden"); // useState defines the initial visibility to show the menu only when clicked
	const [blur, setblur] = useState("hidden");

	const openHam = () => {
		setwidth("w-[55%]"); // setwidth to the desired width for the hamburger menu by button id #hambutton
		setblur("block");
		setTimeout(() => {
			setvisibility("overflow-x-visible"); // this will make the close button visible
		}, 200);
	};
	const closeHam = () => {
		setwidth("w-0"); // setwidth to 0 for the Hamburger menu by close button, it makes hamburger invisible when clicked
		setblur("hidden");
		setTimeout(() => {
			setvisibility("overflow-x-hidden"); // this will make the hamburger invisible when not in use
		}, 200);
	};
	return (
		<>
			<div
				className={`absolute ${blur} top-0 w-full h-full bg-black z-10 transition-all delay-[200ms] opacity-70`}
			/>
			{/* This div will make blur effect when hamburger is clicked*/}

			<header className="text-black body-font bg-black ">
				<div className="container mx-auto flex flex-wrap pr-5 py-1 justify-between small:justify-start space-x-1 items-center">
					{/* {" "} */}
					{/* Justify Start for small devices so that the button and Logo are aligned at left */}
					{/* Below is the hamburger button*/}
					<div className="flex justify-between">
						{/* Logo Image in the flex box */}
						<div className="notSmall:hidden flex ml-4 items-center">
							<div id="hambutton" className="text-white" onClick={openHam}>
								<GoThreeBars className="text-2xl" />
							</div>
						</div>
						<Link href={"/"}>
							<a className="flex title-font font-medium justify-end items-center text-white  md:mb-0">
								{/* <div className="font-bold font-ubuntu px-4 text-3xl">
									Logo Here
								</div> */}
								<picture className="flex justify-end">
									<Link href="/">
										<div className="text-2xl sm:text-4xl px-2  py-2 uppercase">
											<span className="text-[red]">Red </span> Market
										</div>
									</Link>
								</picture>
							</a>
						</Link>
					</div>
					{/* The below div contains all the navigation links and login button */}
					<div className="flex space-x-2 items-center justify-end pr-10 md:pr-4 small:pr-0">
						<nav className="md:ml-auto flex flex-wrap items-center text-base lg:text-xl justify-center w-full small:hidden space-x-4 mr-4">
							<Link href={"/"}>
								<a className="hover:text-red-600 text-white hover:scale-110 transition-all duration-200 font-semibold cursor-pointer">
									Home
								</a>
							</Link>
							<Link href={"/about"}>
								<a className="hover:text-red-600 text-white hover:scale-110 transition-all duration-200 font-semibold cursor-pointer">
									About
								</a>
							</Link>
							<Link href={"/phones"}>
								<a className="hover:text-red-600 text-white hover:scale-110 transition-all duration-200 font-semibold cursor-pointer">
									Phones
								</a>
							</Link>
							<Link href={"/tablets"}>
								<a className="hover:text-red-600 text-white hover:scale-110 transition-all duration-200 font-semibold cursor-pointer">
									Tablets
								</a>
							</Link>
							<Link href={"/computers"}>
								<a className="hover:text-red-600 text-white hover:scale-110 transition-all duration-200 font-semibold cursor-pointer">
									Computers
								</a>
							</Link>
							<Link href={"/gaming"}>
								<a className="hover:text-red-600 text-white hover:scale-110 transition-all duration-200 font-semibold cursor-pointer">
									Gaming
								</a>
							</Link>
						</nav>

						<button className="small:hidden transition-all duration-200 inline-flex items-center bg-[red] lg:text-xl border-0 py-1 px-3 focus:outline-none hover:bg-[red]/80 font-semibold rounded-full  text-white hover:scale-110">
							<Link href={"/login"}>Login</Link>
						</button>
					</div>
				</div>
			</header>

			{/* Hamburger Section which will appear on click */}
			<section
				className={`notSmall:hidden fixed h-full left-0 top-0 z-20 bg-white transition-all delay-200 ${width} ${visibility}`}
			>
				<div className="relative h-full">
					<div className="#primary h-full pb-2 px-2">
						<div className="pt-1">
							{/* Aligning sign in option this to the right */}
							<img
								src="/logo.png"
								alt=""
								className="w-[150px] h-[40px] lg:w-[200px] pl-4 ml-[0px] lg:h-[80px] object-contain"
							/>
						</div>
						<br />
						<div className="flex flex-col max-h-screen space-y-3 mx-4 overflow-y-auto">
							<Link href={"/"}>
								<a className="hover:text-red-600 text-black hover:scale-110 transition-all duration-200 font-semibold cursor-pointer">
									Home
								</a>
							</Link>
							<Link href={"/about"}>
								<a className="hover:text-red-600 text-black hover:scale-110 transition-all duration-200 font-semibold cursor-pointer">
									About
								</a>
							</Link>
							<Link href={"/phones"}>
								<a className="hover:text-red-600 text-black hover:scale-110 transition-all duration-200 font-semibold cursor-pointer">
									Phones
								</a>
							</Link>
							<Link href={"/tablets"}>
								<a className="hover:text-red-600 text-black hover:scale-110 transition-all duration-200 font-semibold cursor-pointer">
									Tablets
								</a>
							</Link>
							<Link href={"/computers"}>
								<a className="hover:text-red-600 text-black hover:scale-110 transition-all duration-200 font-semibold cursor-pointer">
									Computers
								</a>
							</Link>
							<Link href={"/gaming"}>
								<a className="hover:text-red-600 text-black hover:scale-110 transition-all duration-200 font-semibold cursor-pointer">
									Gaming
								</a>
							</Link>
							<br />
							<br />
							<Link href={"/login"} className=" ">
								<a className="hover:text-red-600 text-white bg-black max-w-fit px-4 py-2 rounded-lg flex items-center  hover:scale-110 transition-all duration-200 font-semibold cursor-pointer">
									<CgProfile className="mr-2" /> Login
								</a>
							</Link>
						</div>
					</div>

					{/* Your next content will go here do the top margin however you see fit */}
					<div className="bg-black"></div>
				</div>
				<div className="absolute text-white text-xl top-5 -right-6">
					<button onClick={closeHam}>
						<CgClose />
					</button>
				</div>
			</section>
		</>
	);
}

export default Navbar;
