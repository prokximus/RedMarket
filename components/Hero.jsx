import Image from 'next/image'

function Hero() {
	return (
		<div className="md:hidden">
			<section className="text-gray-600 body-font">
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
						<h1 className="title-font sm:text-4xl uppercase text-2xl mb-4 font-medium text-gray-900">
							{"Get best sale's only on! "}
							<br className="hidden lg:inline-block" />
							<div className="mt-2">
								<Image
									className="object-cover w-[150px] mt-2 mx-auto object-center rounded"
									alt="hero"
									src="/logo.png"
									width={220}
									height={50}
								/>
							</div>
						</h1>
						<p className="mb-8 leading-relaxed">
							Copper mug try-hard pitchfork pour-over freegan heirloom neutra
							air plant cold-pressed tacos poke beard tote bag. Heirloom echo
							park mlkshk tote bag selvage hot chicken authentic tumeric
							truffaut hexagon try-hard chambray.
						</p>
						<div className="flex justify-center">
							<button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
								View Products
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Hero;
